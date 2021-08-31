const { Router } = require('express');
const Country = require('../contrllers/getCountry')
const CountryId = require('../contrllers/getCountryId')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/country',Country);
router.use('/countryId', CountryId);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
