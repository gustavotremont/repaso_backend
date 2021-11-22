const dataFilm = require('../utils/film_utils');

const getFilm = async (req, res) => {

    if(req.params.title){

        const data = await dataFilm.getFilmByName(req.params.title)
        
        if(data.Response == 'True'){
            res.render('film', { film: data } )
        } else {
            res.render('error')
        }
    }else {
        res.render('error')
    }
};

const getFilmByName = (req, res) => {
    if(req.body.filmTitle) {
        res.redirect(`/film/${req.body.filmTitle}`)
    }else {
        res.render('error')
    }
}

const film = {
    getFilm,
    getFilmByName
};

module.exports = film;