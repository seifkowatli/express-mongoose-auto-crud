const express = require('express');
const router = express.Router();

//models
const Item = require('../controllers/item');


router.get('/:id?' , Item.get);
router.post('/' , Item.create);
router.patch('/:id' , Item.update);
router.delete('/:id' , Item.delete);

module.exports = router;