const express = require('express');
const router = express.Router();   
const {createOrganizations,createProperty,createRegion, createField,createCrop,createCropCycleProperty,createCropCycleField,getOrganizationData,getDataByField} = require('../controller/controller');
const { createUser,loginUser } = require('../controller/userController');
router.post('/organization/create', createOrganizations)
router.post('/property/create', createProperty)
router.post('/region/create', createRegion)
router.post('/field/create', createField)
router.post('/crop/create', createCrop)
router.post('/cropCycleProperty/create', createCropCycleProperty)
router.post('/cropCycleField/create', createCropCycleField)
router.get('/getOrganizationsData',getOrganizationData)
router.get('/getDataByField',getDataByField)

router.post('/createUser',createUser)
router.post('/loginUser',loginUser)

module.exports = router;   