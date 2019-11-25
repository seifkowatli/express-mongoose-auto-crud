
const router = require('express').Router();

const generateRoute = require('../controllers/generateRoute').generate;

router.post('/:controllerName' , generateRoute);

module.exports  = router;