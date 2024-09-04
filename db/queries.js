const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_URI });
const createTableSQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  date DATE
);
`;

async function getAllMessages() {
  await pool.query(createTableSQL);
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(message) {
  const text =
    "INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)";
  const values = message;
  await pool.query(text, values);
}

module.exports = { getAllMessages, insertMessage };
