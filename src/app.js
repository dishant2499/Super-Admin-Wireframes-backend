const express = require('express');
require('../src/db/conn')
const app = express();
const port = process.env.PORT || 3002;
const DataList = require('./models/programs')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

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

});

app.get('/programDataList',async (req,res)=>{
    const data = await DataList.find()
    res.send(data)
});


app.listen(()=>{
    console.log(`App Is running On port: ${port}`)
})