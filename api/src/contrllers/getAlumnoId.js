const {Router}= require("express");
const { Alumno,Materia} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/:id", async function (req,res){
   const {id} = req.params;
   let ids =[]
   let notas= []
        try{
         let AlumnoId = await Alumno.findByPk(id,
            {
            include:[Materia],
            exclude: ['createdAt', 'updatedAt','alum_mate']    
        })
        //console.log("idAlumno : " + AlumnoId.dataValues.id)
        if((AlumnoId.dataValues.materia).length){
            for(let i = 0;i<(AlumnoId.dataValues.materia).length;i++){
                notas.push({
                   nombre:AlumnoId.dataValues.materia[i].dataValues.nombre,
                   nota:AlumnoId.dataValues.materia[i].dataValues.id
                })
                //console.log(AlumnoId.dataValues.materia[i].dataValues.nombre)
            }
         console.log(notas)
        }
         return res.status(200).send(AlumnoId)
        }catch(err){
        return res.send("Error general")  
}
})
module.exports = app;