exports.index = (req, res) => {
    res.render('index', {
        title: 'Strona główna - Aplikacja bazodanowa',
        description: 'Aplikacja dodaje i wyświetla użytkowników'
    })
};