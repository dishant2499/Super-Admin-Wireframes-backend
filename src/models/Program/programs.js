const mongoose = require('mongoose')

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

const DataList = mongoose.model('datalists', DataAddSchema);

module.exports = DataList;