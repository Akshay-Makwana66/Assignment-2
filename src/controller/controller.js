const crop = require('../model/crop')
const cropCycleField = require('../model/cropCycleField')
const cropCycleProperty = require('../model/cropCycleProperty')
const field = require('../model/field')
const organizations = require('../model/organizations')
const property = require('../model/property')
const region = require('../model/region')

const createOrganizations=async function(req,res){ 
    try{
        let data=req.body
        let savedData=await organizations.create(data)
        res.status(201).send({status:true,data:savedData})                 
    }catch(err){   
     res.status(500).send({status:false,msg:err})
    }
 }     

 const createProperty=async function(req,res){ 
    try{
        let data=req.body
        let savedData=await property.create(data)
        res.status(201).send({status:true,data:savedData})                 
    }catch(err){   
     res.status(500).send({status:false,msg:err})
    }
 }   
 
 const createRegion=async function(req,res){ 
    try{
        let data=req.body
        let savedData=await region.create(data)
        res.status(201).send({status:true,data:savedData})                 
    }catch(err){   
     res.status(500).send({status:false,msg:err})
    }
 }
 
 const createField=async function(req,res){ 
    try{
        let data=req.body
        let savedData=await field.create(data)
        res.status(201).send({status:true,data:savedData})                 
    }catch(err){   
     res.status(500).send({status:false,msg:err})
    }
 }  

 const createCrop=async function(req,res){ 
    try{
        let data=req.body
        let savedData=await crop.create(data)
        res.status(201).send({status:true,data:savedData})                 
    }catch(err){   
     res.status(500).send({status:false,msg:err})
    }
}

 const createCropCycleProperty=async function(req,res){ 
    try{
        let data=req.body
        let savedData=await cropCycleProperty.create(data)
        res.status(201).send({status:true,data:savedData})                 
    }catch(err){   
     res.status(500).send({status:false,msg:err})
    }
}
 const createCropCycleField=async function(req,res){ 
    try{
        let data=req.body
        let savedData=await cropCycleField.create(data)
        res.status(201).send({status:true,data:savedData})                 
    }catch(err){   
     res.status(500).send({status:false,msg:err})
    }
}

const getOrganizationData = async function (req, res) {
    try {
      let conditions = req.query; 
      // Checks whether studentId isa valid ObjectId
        if(conditions.organizationId) {
          if (!mongoose.isValidObjectId(conditions.organizationId))return res.status(400).send({ status: false, msg: "Please Enter organizationId as a valid ObjectId" })}
  
      // Fetching the Students  
      let organization = await organizations.find({$and: [conditions]});
  
      if (organization.length == 0)return res.status(404).send({ status: false, msg: "No organizations found" });
  
      res.status(200).send({ status: true, data: organization });   
  
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

  

  const getDataByField = async function (req, res) {
    try {
      let conditions = req.query; 
      // Checks whether studentId isa valid ObjectId
        if(conditions.fieldId) {
          if (!mongoose.isValidObjectId(conditions.fieldId))return res.status(400).send({ status: false, msg: "Please Enter fieldId as a valid ObjectId" })}
  
      // Fetching the Students  
      let fields = await field.find({$and: [conditions]});
            
      if (fields.length == 0)return res.status(404).send({ status: false, msg: "No fields found" });
  
      res.status(200).send({ status: true, data: fields });   
  
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };



 module.exports = {createOrganizations,createProperty,createRegion, createField,createCrop,createCropCycleProperty,createCropCycleField, getOrganizationData,getDataByField}