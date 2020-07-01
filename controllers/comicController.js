const Comic = require('../models/comic');

let comics = {

    create: function(req, res) {
        try {
            let body = req.body;
            let newComic = new Comic({
                num: body.num,
                score: body.score
            })

            newComic.save((error, comicDB) => {
                console.log(newComic)
                if (error) {
                    res.status(400).send({
                        statusCode: 400,
                        ok: false,
                        error: 'Error al agregar el nuevo comic'
                    })
                } else {
                    res.status(200).send({
                        statusCode: 200,
                        ok: true,
                        create: comicDB
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    getComics: function(req, res) {
        try {
            Comic.find().exec((error, com) =>{
                if (error || !com) {
                    return res.status(400).send({
                        statusCode: 400,
                        status: 'Error',
                        message: 'No se encontraron comics'
                    })
                }else{
                    return res.status(200).send({
                        statusCode: 200,
                        status: 'Success',
                        comics: com
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = comics
