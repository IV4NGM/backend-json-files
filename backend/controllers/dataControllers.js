const asyncHandler = require('express-async-handler')
const path = require('path')
const fs = require('fs/promises')
const { writeFile, readFile } = require('fs')

const filePath = path.join(__dirname,'..', '..', 'db', 'info.json')

const getData = asyncHandler(async (req, res) => {
  const data = await fs.readFile(filePath)
  const jsonData = await JSON.parse(data)
  res.status(200).send(jsonData)
})

const addData = asyncHandler(async (req, res) => {
  readFile(filePath, (error, data) => {
    if (error) {
      res.status(400)
      throw new Error(error.message)
    }
    const jsonData = JSON.parse(data)

    const accessInfo = req.body
    accessInfo.createdAt = new Date().toISOString()

    jsonData.accesses.push(accessInfo)
    writeFile(filePath, JSON.stringify(jsonData, null, 2), (error) => {
      if (error) {
        res.status(400)
        throw new Error(error.message)
      }
      res.status(201).json({"message": "Datos actualizados"})
    })
  })
})

module.exports = {
  getData,
  addData
}