import express from 'express'
import Item from '../controllers/item'
const router = express.Router()

router.post('/', Item.create)
router.get('/', function(req, res) {
  res.send('hello world')
})

module.exports = router
