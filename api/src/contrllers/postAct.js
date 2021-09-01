const { Activity, Country} = require("../db.js");
const axios = require ("axios");
const {Router} = require("express");
const {Op} = require("sequelize");
const app = Router();
app.post("/", async function(req, res) {
    let{name,difficulty,duration,season,countries} = req.body
    //console.log(name,difficulty,duration,season,countries)
    try{
        let newAct = await Activity.create({
            name,
            difficulty,
            duration,
            season
         });
         console.log(newAct)
        // await newAct.addCountry(countries);
        return res.json(newAct) 
    }catch(error){
        return res.send(error)
    }    
})
module.exports = app;
