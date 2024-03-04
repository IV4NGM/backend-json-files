const asyncHandler = require('express-async-handler')

const Access = require('../models/accessModel')

const getData = asyncHandler(async (req, res) => {
  const accessess = await Access.find()
  if (accessess) {
    res.status(200).json(accessess)
  } else {
    res.status(400)
    throw new Error('No se puede mostrar la información en este momento')
  }
  
})

const addData = asyncHandler(async (req, res) => {
  const {local_date: localDate}  = req.body
  if (!localDate) {
    res.status(400)
    throw new Error('Ingresar una fecha')
  }
  const accessCreated = await Access.create({
    localDate
  })

  if(accessCreated) {
    res.status(201).json(accessCreated)
  } else {
    res.status(400)
    throw new Error('No se pudieron guardar los datos')
  }
})

module.exports = {
  getData,
  addData
}