const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/SuperAdmin', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('connected to db')
}).catch((error) => {
    console.log(error)
});
