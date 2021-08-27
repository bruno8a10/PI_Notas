const URLAPI = "https://pokeapi.co/api/v2/pokemon?limit=40";
const {Router}= require("express");
const { Pokemon, Type, Pok_Typ} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();

app.get("/", async (req,res) => {
    const name = req.query.name;
    try{
        const apiPokemon =  await axios.get(URLAPI)
        const pokemons = apiPokemon.data.results;
        let response =[];
        if(name){
         try{
             let pok = await Pokemon.findAll({
               where:{
                   name:{
                       [Op.iLike]: `${name}`,
                   }
               }  
             })
             return res.status(200).json(pok)
          } catch(err){
             return res.send("No existe ese Pokemon ")
         }
        }
       //  for(let i =0; i< pokemons.length;i++){
       //    const {url} = pokemons[i];
       //    const {data} = await axios.get(url);
       //    response.push({name:data.name, attack:data.stats[1].base_stat, 
       //       defense: data.stats[2].base_stat, speed: data.stats[5].base_stat, 
       //       hp: data.stats[0].base_stat, weight: data.weight, height: data.height, 
       //       types: data.types, spriteSrc: data.sprites.other.dream_world.front_default})
       //  }
       //  for(let j= 0; j< response.length; j++){
       //      let [poke, create ]=  await Pokemon.findOrCreate({
       //           where:{
       //             name: response[j].name,
       //             attack: response[j].attack,
       //             defense: response[j].defense,
       //             speed: response[j].speed,
       //             hp: response[j].hp,
       //             height: response[j].height,
       //             weight: response[j].weight,
       //             spriteSrc: response[j].spriteSrc,
       //          } 
       //       }) 
       //       for(let i = 0; i < response[j].types.length ; i++ ){
           
       //          let type = await Type.findOne({where: {name: response[j].types[i].type.name}})
       //          await poke.addType(type.dataValues.id);
       //          console.log((type.dataValues.id))
       //          // console.log("creado : ",create)
       //       }           
            
       //  }
        let pokes = await Pokemon.findAll(
                 { include:{model: Type}
                 }
              );
        return res.json(pokes)
    }catch(err){
       return res.status(404).send(err)
    }
 })
 
 module.exports = app;