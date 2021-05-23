const {API} = require("../../utils");
const {OvertimeApplyRecordCollection} = require('../../data/models');

async function add(req,res,next){
    try{
        await OvertimeApplyRecordCollection.create(req.body);
        API.success(res);
    }catch (e){
        const message = "新增加班记录申请报错：" + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = add;
