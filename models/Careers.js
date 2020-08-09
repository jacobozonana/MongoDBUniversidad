const mongoose = require('mongoose')

const careerSchema = new mongoose.Schema({
    name: String,
    matricula: String,
    director: {
        type: String,
        default: 'El Jefe'
    },
    factultad: String,
})

const Careers = mongoose.model('Careers', careerSchema)

module.exports = Careers;