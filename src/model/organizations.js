const mongoose = require('mongoose');

const organizationsSchema = new mongoose.Schema({
    name:{
        type: String
    },
    address:{
        type: String
    },
    established:{
        type: Number
    },
    country:{
        type: String
    }   
},{timestamps:true});
module.exports = mongoose.model("Organizations", organizationsSchema)