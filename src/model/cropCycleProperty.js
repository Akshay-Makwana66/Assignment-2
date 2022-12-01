const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const cropCyclePropertySchema = new mongoose.Schema({
    season:{
        type: String
    },
       propertyId: {
        type: ObjectId, 
       required: true, 
       ref: 'Property'
     },

    
},{timestamps:true});
module.exports = mongoose.model("CropCycleProperty", cropCyclePropertySchema)