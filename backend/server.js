require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5050;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Uses Render's environment variable
const UPC_API_KEY = "628A708FE693FB5003F3017EE11C872E"; 
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
            return res.json({ disposalMethod: row.disposalMethod });
        } else {
            console.log(`⚠️ Item not found in DB, checking UPC Database API for: ${upc}`);

            try {
                // 🔹 Step 1: Fetch product details from UPC Database API
                const upcResponse = await axios.get(`https://api.upcdatabase.org/product/${upc}?apikey=${UPC_API_KEY}`);

                console.log("📡 UPC API Response:", JSON.stringify(upcResponse.data, null, 2)); // Debugging log

                if (!upcResponse.data.success) {
                    console.log("⚠️ No product found for this UPC.");
                    return res.status(404).json({ error: "Product not found in UPC Database API." });
                }

                const productName = upcResponse.data.description || "Unknown Item";
                const productCategory = upcResponse.data.category || "Unknown Category";

                console.log(`🛒 Product Name: ${productName}, Category: ${productCategory}`);

                // 🔹 Step 2: Use GPT-4 Turbo to classify disposal method
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

                // 🔹 Step 3: Save classified item in the database
                db.run(
                    "INSERT INTO ITEM (itemID, name, disposalMethod) VALUES (?, ?, ?)",
                    [upc, productName, predictedDisposal],
                    (err) => {
                        if (err) {
                            console.error("❌ Error saving AI classification:", err);
                            return res.status(500).json({ error: "Failed to save AI prediction" });
                        }
                        console.log("✅ AI classification saved:", predictedDisposal);
                        return res.json({ disposalMethod: predictedDisposal });
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
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


