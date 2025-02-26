const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define database path
const dbPath = path.join(__dirname, 'BinBuddyDatabase.db');

// Create and open database connection
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("❌ SQLite Connection Error:", err.message);
    } else {
        console.log(`✅ Connected to SQLite Database at ${dbPath}`);
    }
});

// Export database connection
module.exports = db;

