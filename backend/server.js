require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5050;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const UPC_API_KEY = "628A708FE693FB5003F3017EE11C872E"; // Your UPC Database API Key
const BARCODE_LOOKUP_API_KEY = "gvo6s6ssbfibwcqasnhjj296nvzll0"; // Your Barcode Lookup API Key

app.use(cors());
app.use(express.json());

app.get("/api/classify/:upc", async (req, res) => {
    const upc = req.params.upc.trim();

    db.get("SELECT * FROM ITEM WHERE itemID = ?", [upc], async (err, row) => {
        if (err) {
            console.error("❌ Database Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (row) {
            console.log("✅ Found item in DB:", row);
            return res.json({
                disposalMethod: row.disposalMethod,
                source: "Database"
            });
        } else {
            console.log(`⚠️ Item not found in DB, checking UPC APIs for: ${upc}`);

            let productName = "Unknown Item";
            let productCategory = "Unknown Category";
            let source = "Unknown";
            let foundProduct = false;

            try {
                // 🔹 Step 1: Try UPC Database API
                try {
                    const upcResponse = await axios.get(`https://api.upcdatabase.org/product/${upc}?apikey=${UPC_API_KEY}`);
                    console.log("📡 UPC Database API Response:", JSON.stringify(upcResponse.data, null, 2));

                    if (upcResponse.data.success) {
                        productName = upcResponse.data.description || productName;
                        productCategory = upcResponse.data.category || productCategory;
                        source = "UPC Database API";
                        foundProduct = true;
                    }
                } catch (error) {
                    console.log("⚠️ No product found in UPC Database API.");
                }

                // 🔹 Step 2: If not found, try Barcode Lookup API
                if (!foundProduct) {
                    try {
                        const lookupResponse = await axios.get(`https://api.barcodelookup.com/v3/products?barcode=${upc}&key=${BARCODE_LOOKUP_API_KEY}`);
                        console.log("📡 RAW Barcode Lookup API Response:", JSON.stringify(lookupResponse.data, null, 2));

                        if (lookupResponse.data.products && lookupResponse.data.products.length > 0) {
                            const product = lookupResponse.data.products[0];
                            console.log("✅ Product Found in Barcode Lookup API:", JSON.stringify(product, null, 2));

                            productName = product.title && product.title.trim() ? product.title.trim() : productName;
                            productCategory = product.category && product.category.trim() 
                                ? product.category.trim() 
                                : (product.brand || product.manufacturer || "Unknown Category");

                            source = "Barcode Lookup API";
                            foundProduct = true;
                        } else {
                            console.log("⚠️ No valid product found in Barcode Lookup API.");
                        }
                    } catch (error) {
                        console.log("⚠️ No product found in Barcode Lookup API.");
                    }
                }

                // 🔹 Step 3: If still not found, ask AI to guess
                if (!foundProduct) {
                    console.log("🤖 Asking AI to infer the product type...");
                    const aiGuessResponse = await axios.post(
                        "https://api.openai.com/v1/chat/completions",
                        {
                            model: "gpt-4-turbo",
                            messages: [
                                { role: "system", content: "You classify items based on their UPC number. Try to guess the item type if no product data is available." },
                                { role: "user", content: `What type of product might have the UPC number "${upc}"? Respond with the most likely product type or 'Unknown'.` }
                            ],
                            max_tokens: 20,
                            temperature: 0.5
                        },
                        {
                            headers: {
                                "Authorization": `Bearer ${OPENAI_API_KEY}`,
                                "Content-Type": "application/json"
                            }
                        }
                    );

                    productName = aiGuessResponse.data.choices?.[0]?.message?.content?.trim() || "Unknown Item";
                    productCategory = "AI Generated Category";
                    source = "AI Guess";
                    console.log(`🤖 AI Guessed: ${productName}`);
                }

                console.log(`🛒 Product Name: ${productName}, Category: ${productCategory}`);

                // 🔹 Step 4: Use AI to classify disposal method
                const aiResponse = await axios.post(
                    "https://api.openai.com/v1/chat/completions",
                    {
                        model: "gpt-4-turbo",
                        messages: [
                            { role: "system", content: "You classify items for disposal based on their name and category." },
                            { role: "user", content: `Classify the disposal method for "${productName}" in category "${productCategory}". Options: Recycle, Compost, Trash, Hazardous. Respond with only one word.` }
                        ],
                        max_tokens: 10,
                        temperature: 0.3
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${OPENAI_API_KEY}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                const predictedDisposal = aiResponse.data.choices?.[0]?.message?.content?.trim() || "Unknown";

                console.log(`🤖 AI Predicted Disposal: ${predictedDisposal}`);

                // 🔹 Step 5: Save classified item in the database
                db.run(
                    "INSERT INTO ITEM (itemID, name, disposalMethod) VALUES (?, ?, ?)",
                    [upc, productName, predictedDisposal],
                    (err) => {
                        if (err) {
                            console.error("❌ Error saving AI classification:", err);
                            return res.status(500).json({ error: "Failed to save AI prediction" });
                        }
                        console.log("✅ AI classification saved:", predictedDisposal);

                        let warningMessage = "";
                        if (source === "AI Guess") {
                            warningMessage = "This classification is AI-generated. Please double-check with local recycling guidelines.";
                        }

                        return res.json({
                            disposalMethod: predictedDisposal,
                            source: source,
                            warning: warningMessage
                        });
                    }
                );
            } catch (error) {
                console.error("❌ UPC API or GPT-4 Error:", error.response?.data || error.message);
                return res.status(500).json({ error: "Error fetching product details or AI classification failed" });
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`✅ Connected to SQLite database`);
    console.log(`🚀 Server running on https://binbuddy-36i3.onrender.com`);
});


