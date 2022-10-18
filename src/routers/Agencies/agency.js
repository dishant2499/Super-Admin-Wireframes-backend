const express = require('express');
const router = new express.Router();
const AgencyList = require('../../models/Agencies/agency');

router.post('/createagency',async (req,res)=>{
    let newData = await new AgencyList(req.body)
    const dataentry =await newData.save();
    res.send(dataentry);
    console.log(dataentry)
});

router.get('/agency',async (req,res)=>{
    const agencyData = await AgencyList.find()
    res.send(agencyData)
});

router.delete('/agency/delete/:id',async (req,res)=>{
    console.log("id",req.param.id);
    try {
        const deleteAgency = await AgencyList.findByIdAndDelete(req.param.id);
        if(!req.param.id){
            res.status(400).send();
        }
        res.send(deleteAgency)
    }catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
