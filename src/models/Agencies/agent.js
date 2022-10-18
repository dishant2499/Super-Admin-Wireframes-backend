
const mongoose = require('mongoose')

const AgentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    added: {
        type: Date,
        required: true
    },
});

const AgentList = mongoose.model('AgentList', AgentSchema);

module.exports = AgentList;
