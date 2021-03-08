const _ = require("lodash");
const StudyRecordCollection = require("../../data/models/StudyRecord");

async function deleteMany(req,res,next){
    try{
        await StudyRecordCollection.deleteMany({ _id: { $in: req.body} });
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end('数据删除成功');
    }catch (e){
        console.error("删除数据报错：" + e.message);
    }
}
module.exports = deleteMany;
