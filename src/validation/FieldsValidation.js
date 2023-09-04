const fieldsValidation=(json)=>{
    let json_validade = {nome: '', protagonista: '', idade: undefined}
    
    if(json["nome"]){
        let hasNumber = /\d/;
       if(hasNumber.test(json["nome"])) return {msg: "Field nome Invalid", error: false}
        json_validade["nome"] = json["nome"]
    }

    if(json["protagonista"]){
        let hasNumber = /\d/;
       if(hasNumber.test(json["protagonista"])) return {msg: "Field protagonista Invalid", error: false}
        json_validade["protagonista"] = json["protagonista"]
    }

    if(json["idade"]){
       if(!/^\d+$/.test(json["idade"])) return {msg: "Field idade Invalid", error: false}
        json_validade["idade"] = json["idade"]
    }

    return json_validade

}



module.exports = fieldsValidation
