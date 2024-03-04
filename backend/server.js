const express = require('express')
require('colors')
require('dotenv').config()
const cors = require('cors')

const dataRoutes = require('./routes/accessRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/data', dataRoutes)

app.use(errorHandler)


app.listen(port, () => { console.log(`Servidor iniciado en el puerto ${port}`) })