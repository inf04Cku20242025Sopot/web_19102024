const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_db",
});

conn.connect((error) => {
  if (error) {
    console.log("Błąd połączenia");
  } else {
    console.log("Połączono z bazą");
  }
});

const query = "SELECT * FROM users";

exports.home = (req, res) => {
  conn.execute(query, (error, results) => {
    if (error) {
      return res.json({ error: "Błąd" });
    }
    res.send(results);
    res.status(200);
  });
  conn.end();
};

module.exports = conn;
