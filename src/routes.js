// require('dotenv').config({path:'variable.env'})
const server = require('express')
const routerAnimes = server.Router()
const AnimeControllers = require('../src/controllers/AnimeControllers')


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

routerAnimes.use('/api-docs', swaggerUi.serve);
routerAnimes.get('/api-docs', swaggerUi.setup(swaggerDocument));


routerAnimes.post('/animes', AnimeControllers.animePost)
routerAnimes.get('/animes', AnimeControllers.animeGetAll)
routerAnimes.put('/animes', AnimeControllers.animePut)
routerAnimes.patch('/animes', AnimeControllers.animePatch)
routerAnimes.get('/animes/:idanime', AnimeControllers.animeGetById)
routerAnimes.get('/animelast', AnimeControllers.animeGetLast)
routerAnimes.delete('/animes/:animeId', AnimeControllers.animeDelete)


module.exports = routerAnimes


