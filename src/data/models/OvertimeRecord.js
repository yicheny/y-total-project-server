const mongoose = require('mongoose');
const conn = require('../db');

const OvertimeRecordSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    date: {
        type: Date,
        required: true,
    },
    duration: {
        type: Number,
        min: 0,
        max: 1,
        required: true,
    },
    memo: {
        type: String,
        require:true
    }
}, {
    timestamps: {
        creatAt: 'createTime',
        updateAt: 'updateTime'
    }
});

module.exports.OvertimeRecordCollection = conn.model('overtime-record', OvertimeRecordSchema);
module.exports.OvertimeApplyRecordCollection = conn.model("overtime-apply-record",OvertimeRecordSchema);
