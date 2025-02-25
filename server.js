const express = require('express');
const cors = require('cors');
const db = require('./db'); // Ensure this file exists

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

console.log("🚀 Starting Server...");

// API Route: Get product details by UPC
app.get('/api/product/:upc', (req, res) => {
    const upcCode = req.params.upc;
    console.log(`🔎 Received request for UPC: ${upcCode}`);

    db.get("SELECT * FROM ITEM WHERE itemID = ?", [upcCode], (err, row) => {
        if (err) {
            console.error("❌ Database Query Error:", err);
            res.status(500).json({ error: "Database error" });
        } else if (row) {
            console.log(`✅ Found product: ${row.name}`);
            res.json({ name: row.name, disposalMethod: row.disposalMethod });
        } else {
            console.log("❌ Product not found.");
            res.json({ message: "Product not found" });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

