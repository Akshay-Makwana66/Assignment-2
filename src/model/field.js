const mongoose = require('mongoose');
 const ObjectId = mongoose.Schema.Types.ObjectId
const fieldSchema = new mongoose.Schema({
    longitude:{
        type: String
    },
    latitude:{
        type: String
    },
    area:{
        type: String
    },
    regionId: {
         type: ObjectId, 
        required: true, 
        ref: 'Region' },
   
},{timestamps:true});
module.exports = mongoose.model("Field", fieldSchema)