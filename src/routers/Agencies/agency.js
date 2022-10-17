const express = require('express');
const router = new express.Router();
const AgencyList = require('../../models/Agencies/agency');

router.post('/createagency',async (req,res)=>{
    const requesedData = {
        name:req.body.name,
        address:req.body.address,
        status:req.body.status,
        createdate:new Date(),
    };
    let newData = await new AgencyList(requesedData)
    const dataentry =await newData.save();
    res.send(dataentry);
    console.log(dataentry)
});

router.get('/agency',async (req,res)=>{
    const agencyData = await AgencyList.find()
    res.send(agencyData)
});

module.exports = router;