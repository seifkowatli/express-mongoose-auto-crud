const express = require('express');
const router = express.Router();

//models
const Item = require('../controllers/item');


router.post('/' , Item.create);
router.get('/' , function(req, res){
    res.send('hello world');
});


module.exports = router;