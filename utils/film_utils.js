const fetch = require('node-fetch');

const API_KEY = '9fd5cced';

const getFilmByName = async (name) => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${name}`);
    const film = await data.json();
    return film;
};

const film = {
    getFilmByName
};

module.exports = film;