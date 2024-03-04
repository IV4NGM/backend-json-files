const express = require('express')
const Router = express.Router
const path = require('path')
const router = Router()
const {getData, addData} = require('../controllers/dataControllers')

const folderPath = path.join(__dirname, '..', '..', 'db')

router.get('/', getData, express.static(folderPath))
router.post('/', addData, express.static(folderPath))

module.exports = router