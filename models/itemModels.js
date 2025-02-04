const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.models('Items',itemSchema)