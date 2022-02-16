const { Router } = require('express');
const AlumnoId = require('../contrllers/getAlumnoId')
const PostAlumno= require('../contrllers/postAlumno')
const Alumnos = require('../contrllers/getAlumnos')
const PostMateria = require ('../contrllers/postMateria')
const Materias = require('../contrllers/getMaterias')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/alumnoId', AlumnoId)
router.use('/postAlumno', PostAlumno);
router.use('/alumnos',Alumnos);
router.use('/materias', Materias);
router.use('/postMateria', PostMateria);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
