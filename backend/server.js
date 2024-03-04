const express = require('express')
require('dotenv').config()
const cors = require('cors')

const dataRoutes = require('./routes/dataRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/data', dataRoutes)

app.use(errorHandler)


app.listen(port, () => { console.log(`Servidor iniciado en el puerto ${port}`) })