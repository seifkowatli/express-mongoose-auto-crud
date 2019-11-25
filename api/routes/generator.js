
const router = require('express').Router();

const generator = require('../controllers/generator').generate;

router.post('/:controllerName' , generator);

module.exports  = router;