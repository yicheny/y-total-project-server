const { StudyRecordCollection } = require("../../data/models");
const {API} = require("../../utils");

async function query(req,res,next){
    try{
        const data = await StudyRecordCollection.find();
        API.success(res,data)
    }catch (e){
        console.error("查询StudyRecord报错：" + e.message)
    }
}

module.exports = query;
