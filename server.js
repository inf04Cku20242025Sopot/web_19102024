const express = require('express');
const bodyParser = require('body-parser')
const ind = require('./index');
const { home } = require('./controllers/select_db');


const app = express();

const port = 3000;

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/select', home)

app.get('/kontakt', (req, res) => {
    res.render('kontakt')
})

app.get('/test', (req, res) => {
    res.send('hello');
})


app.post('/kontakt', (req, res) => {
    const { name, email, password } = req.body;
    res.render('kontakt', {
        name: name,
        email: email,
        password: password
    })

    ind.insertUser(name, email, password);

})

const server = app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie ${port}`);
})

