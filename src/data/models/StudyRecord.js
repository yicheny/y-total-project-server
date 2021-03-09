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
        studyInfo: [String],
        reviewInfo: [String],
    }
},{
    timestamps:{
        creatAt:'createTime',
        updateAt:'updateTime'
    }
});

module.exports = conn.model('study_records',StudyRecordSchema);
