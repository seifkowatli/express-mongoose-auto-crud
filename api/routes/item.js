const express = require('express');
const router = express.Router();

//models
const Item = require('../controllers/item');


router.get('/' , Item.getData);
router.post('/' , Item.postDate);


module.exports = router;