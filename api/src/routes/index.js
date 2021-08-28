const { Router } = require('express');
const Country = require('../contrllers/getCountries')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/country',Country);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
