const mongoose = require('mongoose');
 const ObjectId = mongoose.Schema.Types.ObjectId
const regionSchema = new mongoose.Schema({
   soil:{
    type: String
   },   
    propertyId: {
         type: ObjectId, 
        required: true, 
        ref: 'Property' },
   
},{timestamps:true});
module.exports = mongoose.model("Region", regionSchema)