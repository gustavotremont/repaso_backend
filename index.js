const express = require('express');

const app = express();
const port = 3000;

const film = require('./controllers/film_controller')

app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.static('public')); //Habilitar los archivos para que sean estaticos
app.use(express.urlencoded()); //habilita leer el body en un metodo post

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/film/:title?', film.getFilm )

app.post('/film', film.getFilmByName )

app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
})