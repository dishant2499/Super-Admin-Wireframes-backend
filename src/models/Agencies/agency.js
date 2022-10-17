const mongoose = require('mongoose')

const AgencySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact_person: {
        type: String,
        required: true
    },
    contact_person_role: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
});

const AgencyList = mongoose.model('AgencyLists', AgencySchema);

module.exports = AgencyList;