const { OvertimeRecordCollection } = require("../../data/models");
const {API} = require("../../utils");

async function query(req,res,next){
    try{
        const data = await OvertimeRecordCollection.find();
        API.success(res,data)
    }catch (e){
        const message = "查询OvertimeRecord报错：" + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = query;
