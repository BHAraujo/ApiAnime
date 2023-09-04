// require('dotenv').config({path:'variable.env'})
const server = require('express')
const routerAnimes = server.Router()
const AnimeControllers = require('../src/controllers/AnimeControllers')


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

routerAnimes.use('/api-docs', swaggerUi.serve);
routerAnimes.get('/api-docs', swaggerUi.setup(swaggerDocument));


routerAnimes.get('/animes', AnimeControllers.animeGetAll)
routerAnimes.get('/animes/:idanime', AnimeControllers.animeGetById)
routerAnimes.post('/animes', AnimeControllers.animePost)
routerAnimes.patch('/animes', AnimeControllers.animePatch)
routerAnimes.put('/animes', AnimeControllers.AnimePut)
routerAnimes.delete('/animes/:animeId', AnimeControllers.AnimeDelete)



module.exports = routerAnimes


