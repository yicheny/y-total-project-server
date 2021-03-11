const mongoose = require('mongoose');
const conn = require('../db');

const UserSchema = mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},{
    timestamps:{
        creatAt:'createTime',
        updateAt:'updateTime'
    }
});

module.exports = conn.model('users',UserSchema);
