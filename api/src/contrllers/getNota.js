const {Router}= require("express");
const { Nota } = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) => {
    try{
        let bs = await Nota.findAll({
            attributes: {
                //exclude: ['createdAt', 'updatedAt','materiumId','alumnoId']
                exclude: ['createdAt', 'updatedAt']
            }

        })
        return res.status(200).json(bs)
    }catch(err){
       return res.status(404).send(err)
    }
 })
 module.exports = app;