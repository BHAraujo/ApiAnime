require('dotenv').config({path:'../variable.env'})
const db = require('../db.js')



class AnimeQueries{
     static animeFindAll(){
        return new Promise((accept, reject)=>{
                 db.query("SELECT * FROM ANIME order by id DESC", (error, animes)=>{
                 if(error) reject(error)
                 accept(animes)
                })
        })
    }

    static animeFindById(id){
        return new Promise((accept, reject)=>{
                 db.query('SELECT * FROM ANIME WHERE `id`=?', [id],(error, animes)=>{
                 if(error) reject(error)
                 accept(animes)
                })
        })
    }

    static animeCreate(json){
        return new Promise((accept, reject)=>{  
            
            db.query("INSERT INTO ANIME(nome, protagonista, idade) VALUES (?,?,?)",
             [json["nome"], json["protagonista"], json["idade"]], (error)=>{
                if(error) reject(error)
                accept(json)
            })

        })
    }

    static animeUpdate(json){
        return new Promise((accept, reject)=>{
          
            AnimeQueries.animeFindById(json.id)
            .then((aceito)=>{
                if(aceito.length > 0){
                    
                    switch (true) {
                        case json.hasOwnProperty('nome') == true:
                            db.query("UPDATE ANIME SET nome=? WHERE id=?" , [json.nome, json.id], (error)=>{
                                if(error) reject(error)
                               accept(AnimeQueries.animeFindById(json.id))
                            
                        })            
                            break;

                        case json.hasOwnProperty('protagonista') == true:
                            db.query("UPDATE ANIME SET protagonista=? WHERE id=?" , [json.protagonista, json.id], (error)=>{
                                if(error) reject(error)
                               accept(AnimeQueries.animeFindById(json.id))
                            
                        })
                        break;

                        case json.hasOwnProperty('idade') == true:
                            db.query("UPDATE ANIME SET idade=? WHERE id=?" , [json.idade, json.id], (error)=>{
                                if(error) reject(error)
                               accept(AnimeQueries.animeFindById(json.id))
                            
                        })
                        break;
                    
                        default:
                                accept({"msg": "Field(s) Invalid use nome protagista or idade"})
                                break;
                    }    
                    
                    }})
                })

            }                       

                    static animeUpdateAll=(json)=>{
                        return new Promise((accept, reject)=>{
                     
                            AnimeQueries.animeFindById(json["id"])
                            .then((aceito)=>{
                                if(aceito.length > 0){
                                    db.query("UPDATE ANIME SET nome=?, protagonista=?, idade=? WHERE id=?",
                                     [json.nome, json.protagonista, json.idade, json.id], (error)=>{
                                        if(error) reject(false)
                                    accept(AnimeQueries.animeFindById(json.id))   
                                     })
                                }else{
                                    reject(false)
                                }
                            })


                        })
                    }


                    static animeDeleteById=(id)=>{
                        return new Promise((accept)=>{
                            AnimeQueries.animeFindById(id)
                            .then((aceito)=>{
                                if(aceito.length > 0){
                                  db.query("DELETE FROM ANIME WHERE id=?", [id], (error)=>{
                                    if(error) throw error  
                                    accept({"msg": "Anime with ID " + id + " was deleted"})
                                  })  
                                } 
                            }).catch((reject)=>{
                                accept({"msg": "id is not exists"})
                            })    

                        })
                    }



}


module.exports = AnimeQueries





