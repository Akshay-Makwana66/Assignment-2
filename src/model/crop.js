const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    cropName:{
        type: String
    },
    
},{timestamps:true});
module.exports = mongoose.model("Crop", cropSchema)    