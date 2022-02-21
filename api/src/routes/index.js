const { Router } = require('express');
const AlumnoId = require('../contrllers/getAlumnoId')
const PostAlumno= require('../contrllers/postAlumno')
const Alumnos = require('../contrllers/getAlumnos')
const PostMateria = require ('../contrllers/postMateria')
const Materias = require('../contrllers/getMaterias')
const PostNota = require('../contrllers/postNota')
const PutMateria = require('../contrllers/putMateria')
const PutAlumno = require('../contrllers/putAlumno')
const Nota = require('../contrllers/getNota')
const NotaAlumno = require('../contrllers/getNotaAlumno')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/alumnoId', AlumnoId)
router.use('/postAlumno', PostAlumno);
router.use('/alumnos',Alumnos);
router.use('/materias', Materias);
router.use('/postMateria', PostMateria);
router.use('/postNota',PostNota)
router.use('/putMateria',PutMateria)
router.use('/putAlumno',PutAlumno)
router.use('/nota',Nota)
router.use('/notaAlumno',NotaAlumno)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
