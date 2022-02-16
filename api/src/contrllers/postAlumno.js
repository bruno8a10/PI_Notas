const { Alumno,Materia} = require("../db.js");
const axios = require ("axios");
const {Router} = require("express");
const {Op} = require("sequelize");
const app = Router();
app.post("/", async function(req, res) {
    let{nombre,apellido,dni,sexo,estadoCivil,domicilio,foto,materias} = req.body
    try{
        let newAlumno = await Alumno.create({
            nombre,
            apellido,
            dni,
            sexo,
            estadoCivil,
            domicilio,
            foto
         });
         console.log(newAlumno)
        await newAlumno.addMateria(materias);
        return res.json(newAlumno) 
    }catch(error){
        return res.send("Error general")
    }    
})
module.exports = app;
