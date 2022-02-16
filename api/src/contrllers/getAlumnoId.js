const {Router}= require("express");
const { Alumno,Materia} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/:id", async function (req,res){
   const {id} = req.params;
        try{
         let AlumnoId = await Alumno.findByPk(id,
            {
            include:[Materia] 
        })
         return res.status(200).send(AlumnoId)
        }catch(err){
        return res.send("Error genral")  
}
})
module.exports = app;