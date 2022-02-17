const {Materia} = require("../db.js");
const axios = require ("axios");
const {Router} = require("express");
const {Op} = require("sequelize");
const app = Router();
app.put("/:id", async function(req, res) {
    let{nombre} = req.body;
    const {id} = req.params;
    

    try{
        await Materia.update(
        
            {nombre:nombre},
            {where:{id}}
        )
        const materiaActualizada= await Materia.findByPk(id)
        return res.status(200).json(materiaActualizada)
        
      
    }catch(error){
        return res.send("Error general")
    }    
})
module.exports = app;
