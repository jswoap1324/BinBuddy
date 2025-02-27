require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5050;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Uses Render's environment variable

app.use(cors());
app.use(express.json());

app.get("/api/classify/:upc", async (req, res) => {
    const upc = req.params.upc;

    db.get("SELECT * FROM ITEM WHERE itemID = ?", [upc], async (err, row) => {
        if (err) {
            console.error("❌ Database Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (row) {
            // ✅ If item is found, return disposal method
            console.log("✅ Found item:", row);
            return res.json({ disposalMethod: row.disposalMethod });
        } else {
            // ❌ If item not found, use GPT-4 to classify disposal method
            console.log("⚠️ Item not found, predicting with GPT-4...");

            try {
                const aiResponse = await axios.post(
                    "https://api.openai.com/v1/chat/completions",
                    {
                        model: "gpt-4-turbo",
                        messages: [
                            { role: "system", content: "You are an AI that classifies items for disposal." },
                            { role: "user", content: `Classify the disposal method for this item: "${upc}". Options: Recycle, Compost, Trash, Hazardous. Respond with only one word.` }
                        ],
                        max_tokens: 5,
                        temperature: 0.3
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${OPENAI_API_KEY}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                const predictedDisposal = aiResponse.data.choices[0].message.content.trim();

                // Insert the AI prediction into the database
                db.run(
                    "INSERT INTO ITEM (itemID, name, disposalMethod) VALUES (?, ?, ?)",
                    [upc, "Unknown Item", predictedDisposal],
                    (err) => {
                        if (err) {
                            console.error("❌ Error inserting AI-generated item:", err);
                            return res.status(500).json({ error: "Failed to save AI prediction" });
                        }
                        console.log("✅ AI prediction saved:", predictedDisposal);
                        return res.json({ disposalMethod: predictedDisposal });
                    }
                );
            } catch (error) {
                console.error("❌ GPT-4 Prediction Error:", error.response?.data || error.message);
                return res.status(500).json({ error: "AI prediction failed" });
            }
        }
    });
});


app.listen(PORT, () => {
    console.log(`✅ Connected to SQLite database`);
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


