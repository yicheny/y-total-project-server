const { OvertimeApplyRecordCollection } = require("../../data/models");
const {API} = require("../../utils");

async function query(req,res){
    try{
        const data = await OvertimeApplyRecordCollection.find();
        API.success(res,data)
    }catch (e){
        const message = "查询加班记录申请报错：" + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = query;
