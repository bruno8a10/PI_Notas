const { Alumno,Materia,Nota} = require("../db.js");
const axios = require ("axios");
const {Router} = require("express");
const {Op} = require("sequelize");
const app = Router();
app.post("/", async function(req, res) {
    let{idAlumno,idMateria,calificacion} = req.body
    console.log(idAlumno,idMateria,calificacion)

    try{
        const alu = await Alumno.findByPk(idAlumno)  
        await alu.addMateria(idMateria)
        console.log("se realizo alumno materia")
        const mat = await Materia.findByPk(idMateria)
        console.log(mat.dataValues.id)
        let n = await Nota.create({
            calificacion
         });

        await mat.addNota(n)
        console.log("222")
       // await newAct.addCountry(countries);
        return res.json(n) 
    }catch(error){
        return res.send("Error general")
    }    
})
module.exports = app;
