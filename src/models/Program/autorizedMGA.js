const mongoose = require('mongoose')

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

module.exports = AuthorizedMGA;