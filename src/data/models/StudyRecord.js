const mongoose = require('mongoose');
const conn = require('../db');

const StudyRecordSchema = mongoose.Schema({
    date:{
        type:Date,
        required:true,
    },
    time:{
        type:Number,
        min:0,
        max:1440,
        required:true,
    },
    info:{
        type:String,
        required:true,
    }
},{
    timestamps:{
        creatAt:'createTime',
        updateAt:'updateTime'
    }
});

module.exports = conn.model('study_records',StudyRecordSchema);
