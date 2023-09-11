// require('dotenv').config({path:'../variable.env'})
const AnimeQueries = require('../services/AnimeServices')
const fieldsValidation = require('../validation/FieldsValidation')


class AnimeControllers extends AnimeQueries{
  
    static animeGetAll = async(req, resp)=>{
        let animes = await super.animeFindAll()
        let json ={result: []}
        
        for(let i in animes){
            json.result.push({
            id: animes[i].id,    
            nome: animes[i].nome,
            protagonista: animes[i].protagonista,
            idade: animes[i].idade,       
        })    
        }
        resp.json(json)
        
    }  


    static animeGetById = async(req, resp)=>{
        
        let id_anime = req.params.idanime
        let animes = await super.animeFindById(id_anime)
        let json ={result: []}
        
        for(let i in animes){
            json.result.push({
            id: animes[i].id,    
            nome: animes[i].nome,
            protagonista: animes[i].protagonista,
            idade: animes[i].idade,       
        })    
        }
        resp.json(json)
        
    }

    static animeGetLast = async(req, resp)=>{
        
        let animes = await super.animeFindLast()
        let json ={result: []}
        
        for(let i in animes){
            json.result.push({
            id: animes[i].id,    
            nome: animes[i].nome,
            protagonista: animes[i].protagonista,
            idade: animes[i].idade,       
        })    
        }
        resp.json(json)
        
    }

    static animePost = async(req, resp) =>{
        let valide_anime = fieldsValidation(req.body)
        if (valide_anime["error"] == false){
            resp.status(400).json(valide_anime)
        }else{
            let save_anime = await super.animeCreate(valide_anime)
            resp.status(201)
            resp.json(save_anime)
            
        }      
        
    }
   
   static animePatch = async(req, resp)=>{
        let anime_path = await super.animeUpdate(req.body)
        if (anime_path == false) resp.json(anime_path).status(400)
        resp.json(anime_path).status(200)
        
   } 

   static animePut = async(req, resp)=>{
    let anime_put = await super.animeUpdateAll(req.body)
    if(anime_put == false) resp.json(anime_put).status(400)
    resp.json(anime_put).status(200)
   }


   static animeDelete = async(req, resp)=>{
    let anime_del = await super.animeDeleteById(req.params.animeId)
    
    console.log(anime_del  + "Controler")
    resp.json(anime_del).status(200)
   }

}

module.exports = AnimeControllers

