import express from 'express'
import Ctrl from './controller'
const router = express.Router()

router.post('/', Ctrl.create)

module.exports = router
