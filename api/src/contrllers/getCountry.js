const URLAPI = "https://restcountries.eu/rest/v2/all";
const {Router}= require("express");
const { Country, Activity } = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) => {
    const name = req.query.name;
    try{
        // const apiCountries =  await axios.get(URLAPI)
        // const c = apiCountries.data;
       
        // let response =[]; 
        // for(let i =0; i<c.length; i++){
        //     response.push({
        //     id:c[i].alpha3Code,
        //     name:c[i].name,
        //     flag:c[i].flag,
        //     region:c[i].region,
        //     subregion:c[i].subregion,
        //     area:c[i].area,
        //     population: c[i].population
        //     })
        // }
        // for(let j= 2; j< response.length; j++){
        //     console.log(response[j])
        //       await Country.create({
        //             id: response[j].id,
        //             name: response[j].name,
        //             flag: response[j].flag,
        //             region: response[j].region,
        //             subregion: response[j].subregion,
        //             area: response[j].area,
        //             population: response[j].population,  
        //      }) 
        // }

        if(name){
            try{
                let BsName = await Country.findAll({
                    where:{
                        name:{
                            [Op.iLike]:`${name}`
                        }
                    } 
                 },);
                if(BsName){
                  return res.status(200).json(BsName)    
                }else{
                    return res.send("No existe")
                }
            } catch(err){
                return res.send(err)
            }

        }

        let bs = await Country.findAll({
            include:{ model:Activity}
        })
        return res.status(200).json(bs)
    }catch(err){
       return res.status(404).send(err)
    }
 })
 module.exports = app;