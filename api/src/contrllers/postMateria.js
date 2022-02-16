const { Materia} = require("../db.js");
const axios = require ("axios");
const {Router} = require("express");
const {Op} = require("sequelize");
const app = Router();
app.post("/", async function(req, res) {
    let{nombre} = req.body
    //console.log(name,difficulty,duration,season,countries)
    try{
        let newMateria = await Materia.create({
            nombre
         });
         console.log(newMateria)
       // await newAct.addCountry(countries);
        return res.json(newMateria) 
    }catch(error){
        return res.send("Error general")
    }    
})
module.exports = app;
