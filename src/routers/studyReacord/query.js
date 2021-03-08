const StudyRecordCollection = require("../../data/models/StudyRecord");

async function query(req,res,next){
    try{
        const data = await StudyRecordCollection.find();
        res.json(data);
    }catch (e){
        console.error("查询StudyRecord报错：" + e.message)
    }
}

module.exports = query;
