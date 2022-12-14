const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/SuperAdmin', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('connected to db')
}).catch((error) => {
    console.log(error)
});

const DataAddSchema = mongoose.Schema({
    CovrageType: {
        type: Array,
        required: true
    },
    ProgramName: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    chooseindustry: {
        type: Array,
        required: true
    },
    choosestates: {
        type: Array,
        required: true
    },
})

const DataList = mongoose.model('datalists', DataAddSchema)

const authorizedmgaSchema = mongoose.Schema({
    Mganame: {
        type: Array,
        required: true
    },
    Commission: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    AssociatedProgram: {
        type: Array,
        required: true
    },
    States: {
        type: Array,
        required: true
    },
})

const AuthorizedMGA = mongoose.model('AuthorizedMGA', authorizedmgaSchema);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.post('/program',async (req,res)=>{
    const dataEntered = {
        CovrageType:req.body.CovrageType,
        ProgramName:req.body.ProgramName,
        Status:req.body.Status,
        chooseindustry:req.body.chooseindustry,
        choosestates:req.body.choosestates
    }
    let newData = await new DataList(dataEntered)
const dataentry =await newData.save();
    res.send(dataentry)
    console.log(dataentry)

})

app.get('/programDataList',async (req,res)=>{
    const data = await DataList.find()
    res.send(data)
})

app.put('/program/updatedata/:id',async (req,res)=>{
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

app.delete('/program/deletedata/:id',async (req,res)=>{
    const data = await DataList.deleteOne({_id : req.params.id})
    res.send(data)
})

app.post('/program/adddata',async (req,res)=>{
    try {
        const dataEntered = {
            CovrageType:req.body.CovrageType,
            ProgramName:req.body.ProgramName,
            Status:req.body.Status,
            chooseindustry:req.body.chooseindustry,
            choosestates:req.body.choosestates
        };
        let newData = await new AuthorizedMGA(dataEntered)
        const dataentry =await newData.save();
        res.send(dataentry);
        console.log(dataentry)
    }catch (e) {
        console.log("errrr",e);
        res.send(400).send("please Try Again")
    }


});


app.listen(3002, () => {
    console.log('sever listening on port:3002');
});