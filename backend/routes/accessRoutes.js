const express = require('express')
const Router = express.Router
const router = Router()
const { getData, addData } = require('../controllers/accessControllers')

router.get('/', getData)
router.post('/', addData)

module.exports = router