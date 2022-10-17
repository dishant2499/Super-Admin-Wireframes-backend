const express = require('express');
require('../src/db/conn');
const app = express();
const port = process.env.PORT || 3002;
const bodyParser = require('body-parser');
const cors = require('cors');
const ProgramRouter = require('./routers/program');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(ProgramRouter);

app.listen(()=>{
    console.log(`App Is running On port: ${port}`)
});