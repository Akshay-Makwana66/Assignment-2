const crop = require('../model/crop')
const cropCycleField = require('../model/cropCycleField')
const cropCycleProperty = require('../model/cropCycleProperty')
const field = require('../model/field')
const organizations = require('../model/organizations')
const property = require('../model/property')
const region = require('../model/region')
const mongoose = require('mongoose')
const { populate } = require('../model/crop')
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
      // Checks whether or organizationId is a valid ObjectId
        if(conditions.organizationId) {
          if (!mongoose.isValidObjectId(conditions.organizationId))return res.status(400).send({ status: false, msg: "Please Enter organizationId as a valid ObjectId" })}
  
      // Fetching the organizations  
      let organization = await organizations.find(conditions);
      if (organization.length == 0)return res.status(404).send({ status: false, msg: "No organizations found" });
  
      res.status(200).send({ status: true, data: organization });   
  
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };


  const getDataByCrop = async function (req, res) {  
      try {
        let conditions = req.query; 
        // Checks whether fieldId is a valid ObjectId
          if(conditions.fieldId) {
            if (!mongoose.isValidObjectId(conditions.fieldId))return res.status(400).send({ status: false, msg: "Please Enter fieldId as a valid ObjectId" })}
    
        // Fetching the Students  
        let crops = await cropCycleField.find(conditions).populate("cropId").populate("fieldId")         
        if (crops.length == 0)return res.status(404).send({ status: false, msg: "No crops found" }); 
    
        res.status(200).send({ status: true, data: crops });   
    
      } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
      }
    };
  


  const getDataByField = async function (req, res) {
    try {
      let conditions = req.query
      if(conditions.organizationId) {
        if (!mongoose.isValidObjectId(conditions.organizationId))return res.status(400).send({ status: false, msg: "Please Enter organizationId as a valid ObjectId" })}
        // fetching the data...
        let checkOrg = await organizations.findOne({_id: conditions.organizationId}); 
        if(!checkOrg) return res.status(400).send({ status: false, msg: "organizationId is not present in database" });

        let field1= await field.find().populate({
          path    : 'regionId',
          populate: [
              { path: 'propertyId' }
          ]
     });
     
        let field2 = field1.filter((x)=>{
                let c = x.regionId.propertyId.organizationId.toString()
               
                if(c===conditions.organizationId){
                    return x 
                }
        });    
      
         if (field2.length == 0)return res.status(404).send({ status: false, msg: "No fields found" });
        res.status(200).send({ status: true, data1: field2 });   
  
    } catch (error) {
      console.log(error)
        res.status(500).send({ status: false, msg: error.message });     
    }
  };  

  const getDataByCropCylce = async function (req, res) {
    try {
      let conditions = req.query
      if(conditions.propertyId) {
        if (!mongoose.isValidObjectId(conditions.propertyId))return res.status(400).send({ status: false, msg: "Please Enter propertyId as a valid ObjectId" })}
        // fetching the data...
        let checkOrg = await property.findOne({_id: conditions.propertyId}); 
        if(!checkOrg) return res.status(400).send({ status: false, msg: "propertyId is not present in database" });

        let field1= await cropCycleField.find().populate({
         
          path    : 'fieldId',
          populate: [
              { path: 'regionId' }
          ]
         
     }).populate({
       path: 'cropId',        
     })
     let field2 = field1.filter((x)=>{
      let c = x.fieldId.regionId.propertyId.toString()
     
      if(c===conditions.propertyId){
          return x 
      }
});    

if (field2.length == 0)return res.status(404).send({ status: false, msg: "No cropcycle founds" });
res.status(200).send({ status: true, data1: field2 });   

    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };





 module.exports = {createOrganizations,createProperty,createRegion, createField,createCrop,createCropCycleProperty,createCropCycleField, getOrganizationData,getDataByCrop,getDataByField,getDataByCropCylce}