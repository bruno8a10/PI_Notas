const URLAPI = "https://restcountries.eu/rest/v2/all";
const {Router}= require("express");
const { Country, Activity } = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();

app.get("/", async (req,res) => {
    const name = req.query.name;
    try{
        const apiCountries =  await axios.get(URLAPI)
        const c = apiCountries.data;
        let response =[];
        
        for(let i =0; i<c.length; i++){
            response.push({
            id:c[i].alpha3Code,
            name:c[i].name,
            flag:c[i].flag,
            region:c[i].region,
            subregion:c[i].subregion,
            area:c[i].area,
            population: c[i].population
            })
        }
        for(let j= 0; j< response.length; j++){
            console.log(response[j].id)
            let [x , crate] = await Country.findOrCreate({
                    where:{
                      id: response[j].id,
                      name: response[j].name,
                      flag: response[j].flag,
                      region: response[j].region,
                      subregion: response[j].subregion,
                      area: response[j].area,
                      population: response[j].population,
                    }
                     
               }) 
            
                              
             console.log(crate);  
        }
        return res.json(response)
    }catch(err){
       return res.status(404).send(err)
    }
 })
 
 module.exports = app;