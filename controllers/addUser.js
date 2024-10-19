exports.add = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  //   res.send("Działa");
  res.render("form", {
    name: name,
    email: email,
    password: password,
  });
  add(name, email, password);
};

const add = (name, email, password) => {
  let insertQuery =
    "insert into users (name, email, password) values (?, ?, ?)";
  conn.execute(insertQuery, [name, email, password], (error, result) => {
    if (error) {
      console.error(`Błąd podczas dodawania uzytkownika: ${error}`);
      return;
    } else {
      console.log(`Dodano użytkownika ${name} o id` + result.insertId);
    }
  });
};
