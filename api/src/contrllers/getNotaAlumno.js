const {Router}= require("express");
const { Nota} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async function (req,res){
    let{idUsuario,idMateria} = req.body
    console.log(idUsuario)
        try{
         let Notas = await Nota.findAll({
            where: { alumnoId: idUsuario, materiumId:idMateria}
        });
         return res.status(200).send(Notas)
        }catch(err){
        return res.send("Error general")  
}
})
module.exports = app;