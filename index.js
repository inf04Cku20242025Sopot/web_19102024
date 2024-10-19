const displayUsers = () => {
    let displayQuery = 'select * from users;'
    conn.execute(displayQuery, (error, result) => {
        if (error) {
            console.error('Bład wykonywania zapytania');
            return;
        } else {
            result.forEach(element => {
                console.log(element.id, element.name)
            })

        }

    })

}


const insertUser = (name, email, password) => {
    let insertQuery = "insert into users (name, email, password) values (?, ?, ?)";
    conn.execute(insertQuery, [name, email, password], (error, result) => {
        if (error) {
            console.error(`Bład wykonywania kwerendy dodawania uzytkownika: ${error}`);
            return;
        } else {
            console.log(`Dodano uzywtkownika ${name} o id` + result.insertId);
        };
    })
}




//displayUsers();

module.exports = {
    displayUsers,
    insertUser
}
