const {Router}= require("express");
const {Materia,Nota} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    try{
        let materias = await Materia.findAll({
            include: {
                model: Nota,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
     
        );
        return res.status(200).json(materias)
    }catch(err){
    return res.send("error general")
    }
})
module.exports = app;