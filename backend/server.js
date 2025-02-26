const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// ✅ Log all incoming requests
app.use((req, res, next) => {
    console.log(`➡️  [${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello from BinBuddy Backend!");
});

app.get("/api/classify/:upc", (req, res) => {
    const upc = req.params.upc;
    console.log(`🔍 Classifying UPC: ${upc}`);

    db.get("SELECT * FROM ITEM WHERE itemID = ?", [upc], (err, row) => {
        if (err) {
            console.error("❌ Database Error:", err);
            res.status(500).json({ error: err.message });
        } else if (!row) {
            console.log("⚠️  Item not found");
            res.status(404).json({ message: "Item not found" });
        } else {
            console.log("✅ Found item:", row);
            res.json(row);
        }
    });
});

app.listen(PORT, () => {
    console.log(`✅ Connected to SQLite database`);
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


