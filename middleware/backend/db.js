const Database = require('better-sqlite3');
const db = new Database('urls.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shortcode TEXT UNIQUE,
    original_url TEXT,
    created_at TEXT,
    expiry TEXT
  );
  CREATE TABLE IF NOT EXISTS clicks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shortcode TEXT,
    timestamp TEXT,
    referrer TEXT,
    location TEXT
  );
`);
module.exports = db;
