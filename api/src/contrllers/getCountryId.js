const {Router}= require("express");
const { Country, Activity} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/:id", async function (req,res){
    const {id} = req.params;
        try{
         let bsId = await Country.findByPk(id)
         console.log(bsId)
         return res.status(200).json(bsId)
        }catch(err){
        return res.send("Error")  
}
})
module.exports = app;