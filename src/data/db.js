const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://localhost:27017/y_total',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conn;
