const {Router}= require("express");
const { Alumno,Materia } = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) => {
    const nombre = req.query.nombre;
    alumnos = []
    try{

        if(nombre){
            let BsAlumnosNombre = await Alumno.findAll({
                where:{
                    nombre:{
                        [Op.iLike]:`%${nombre}%`,
                    }
                },
                attributes: {
                    exclude:['createdAt','updatedAt']},
                include: {
                model:Materia,
                attributes:['nombre'],
                through:{
                    attributes:[]
                }
                } 
             },);
             if(BsAlumnosNombre.length>0){
                return res.status(200).json(BsAlumnosNombre)    
            }else
            return res.status(200).send("No existe ese nombre")


        }
        let bs = await Alumno.findAll({
            include:{ 
            model:Materia,
            through:{
                attributes:[]
            }
        }
        })
        return res.status(200).json(bs)
    }catch(err){
       return res.status(404).send(err)
    }
 })
 module.exports = app;