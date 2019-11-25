const express = require('express');
const router = express.Router();


const Item = require('../controllers/Item');



router.get('/:id?' , Item.get);
router.post('/' , Item.create);
router.patch('/:id' , Item.update);
router.delete('/:id' , Item.delete);

module.exports = router;