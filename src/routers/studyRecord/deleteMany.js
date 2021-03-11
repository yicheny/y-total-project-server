const { StudyRecordCollection } = require("../../data/models");
const {API} = require("../../utils");

async function deleteMany(req,res,next){
    try{
        await StudyRecordCollection.deleteMany({ _id: { $in: req.body} });
        API.success(res);
    }catch (e){
        console.error("删除StudyRecord数据报错：" + e.message);
    }
}
module.exports = deleteMany;
