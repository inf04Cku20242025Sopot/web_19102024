const conn = require("./controllers/select_db");

const displayUsers = () => {
  let displayQuery = "select * from users;";
  conn.execute(displayQuery, (error, result) => {
    if (error) {
      console.error("Bład wykonywania zapytania");
      return;
    } else {
      result.forEach((element) => {
        console.log(element.id, element.name);
      });
    }
  });
};

module.exports = displayUsers;
