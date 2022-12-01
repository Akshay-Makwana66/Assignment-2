const mongoose = require('mongoose');
 const ObjectId = mongoose.Schema.Types.ObjectId
const regionSchema = new mongoose.Schema({
    propertyName:{
        type: String
    },
    organizationId: {
         type: ObjectId, 
        required: true, 
        ref: 'Organizations' },
    location:{
        type: String
    },

},{timestamps:true});
module.exports = mongoose.model("Property", regionSchema)