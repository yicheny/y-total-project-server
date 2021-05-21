const {API} = require("../../utils");
const {OvertimeRecordCollection} = require('../../data/models');

async function add(req,res,next){
    try{
        await OvertimeRecordCollection.create(req.body);
        API.success(res);
    }catch (e){
        const message = "新增TimeRecord数据报错：" + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = add;
