const { Router } = require('express');
const Country = require('../contrllers/getCountry')
const CountryId = require('../contrllers/getCountryId')
const ActivityAlta = require ('../contrllers/postAct')
const Activity = require('../contrllers/getAct')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/countryId', CountryId);
router.use('/country',Country);
router.use('/activity', Activity);
router.use('/actPost', ActivityAlta);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
