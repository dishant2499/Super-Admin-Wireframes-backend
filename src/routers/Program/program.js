const express = require('express');
const router = new express.Router();
const DataList = require('../../models/Program/programs');

router.post('/program',async (req,res)=>{
    try {
        const dataEntered = {
            CovrageType:req.body.CovrageType,
            ProgramName:req.body.ProgramName,
            Status:req.body.Status,
            chooseindustry:req.body.chooseindustry,
            choosestates:req.body.choosestates
        };
        let newData = await new DataList(dataEntered)
        const dataentry =await newData.save();
        res.send(dataentry);
        console.log(dataentry)
    }catch (e) {
        console.log("errrr",e);
        res.send(400).send("please Try Again")
    }


});

router.get('/programDataList',async (req,res)=>{
    const data = await DataList.find()
    res.send(data)
});

router.put('/program/updatedata/:id',async (req,res)=>{
    console.log(req.params.id)
    try {
        const data = await DataList.updateOne({_id : req.params.id},{$set:{
                ...req.body
            }})
        res.send(data)
    }catch (e) {
        console.log(e)
    }

})

router.delete('/program/deletedata/:id',async (req,res)=>{
    const data = await DataList.deleteOne({_id : req.params.id})
    res.send(data)
})

module.exports = router;
