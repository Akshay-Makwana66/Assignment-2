const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const cropCycleFieldSchema = new mongoose.Schema({
    season:{
        type: String
    },
    fieldId: {
        type: ObjectId, 
       required: true, 
       ref: 'Field'
     },
     cropId: {
        type: ObjectId, 
       required: true, 
       ref: 'Crop'
     },
     
    
},{timestamps:true});
module.exports = mongoose.model("CropCycleField", cropCycleFieldSchema)