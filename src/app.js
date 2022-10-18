const express = require('express');
require('../src/db/conn');
const app = express();
const port = process.env.PORT || 3002;
const bodyParser = require('body-parser');
const cors = require('cors');
const ProgramRouter = require('./routers/program');
const AgencyRouter = require('./routers/Agencies/agency');
const AgentRouter = require('./routers/Agencies/agent');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(ProgramRouter);
app.use(AgencyRouter);
app.use(AgentRouter);

app.listen(port,  ()=> {
    console.log('app listening on port ' + port + '!');
});
