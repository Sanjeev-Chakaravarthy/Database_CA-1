const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    ItemsArray:[{type:mongoose.Schema.Types.Array,ref:"Items"}]

},{timestamps:true})

module.exports = mongoose.models('Restaurant',restaurantSchema)