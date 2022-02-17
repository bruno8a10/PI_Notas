const {Alumno} = require("../db.js");
const axios = require ("axios");
const {Router} = require("express");
const {Op} = require("sequelize");
const app = Router();
app.put("/:id", async function(req, res) {
    let{nombre,apellido,dni,sexo,estadoCivil,domicilio,foto} = req.body
    const {id} = req.params;
    try{
        await Alumno.update(
            {nombre:nombre,
             apellido:apellido,
             dni:dni,
             sexo:sexo,    
              estadoCivil:estadoCivil,
              domicilio:domicilio,
              foto:foto
            },
            {where:{id}}
        )
        const alumnoActualizada= await Alumno.findByPk(id)
        return res.status(200).json(alumnoActualizada)
        
      
    }catch(error){
        return res.send("Error general")
    }    
})
module.exports = app;
