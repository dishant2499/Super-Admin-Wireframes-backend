const mongoose = require('mongoose')

const AgencySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    contact_person: {
        type: String,
    },
    contact_person_role: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    createdate:{
        type: Date
    }
});

const AgencyList = mongoose.model('AgencyLists', AgencySchema);

module.exports = AgencyList;
