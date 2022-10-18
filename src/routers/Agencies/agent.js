const express = require('express');
const router = new express.Router();
const AgentList = require('../../models/Agencies/agent');

router.post('/agent/create',async (req,res)=>{
    let newData = await new AgentList(req.body);
    const newAgent =await newData.save();
    res.send(newAgent);
});

router.get('/agent',async (req,res)=>{
    const agentData = await AgentList.find()
    res.send(agentData)
});

module.exports = router;
