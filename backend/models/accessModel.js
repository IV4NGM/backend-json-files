const mongoose = require('mongoose')

const accessSchema = mongoose.Schema({
  localDate: {
    type: Date,
    required: [true, 'Ingresa la fecha local']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Access', accessSchema)
