const {Router}= require("express");
const {Activity,Country} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    try{
        let act = await Activity.findAll({
            attributes: {
                exclude:['createdAt','updatedAt']},
            include:{ 
            model:Country,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
      
        });
        return res.status(200).json(act)
    }catch(err){
    return res.send("No existe")
}
})
module.exports = app;