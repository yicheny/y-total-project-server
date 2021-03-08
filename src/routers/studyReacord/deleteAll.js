const _ = require("lodash");
const StudyRecordCollection = require("../../data/models/StudyRecord");

async function deleteAll(req,res,next){
    try{
        await StudyRecordCollection.deleteMany();
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end('数据删除成功');
    }catch (e){
        console.error("删除StudyRecord数据报错：" + e.message);
    }
}
module.exports = deleteAll;
