const _ = require("lodash");
const StudyRecordCollection = require("../../data/models/StudyRecord");

async function add(req,res,next){
    try{
        const mockData = _.times(2,x=>({
            date:Date.now(),
            time:x,
            info:{
                studyInfo:["这是studyInfo"],
                reviewInfo:["这是reviewInfo"]
            }
        }));
        await StudyRecordCollection.create(mockData);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end('数据增加成功');
    }catch (e){
        console.error("新增StudyRecord数据报错：" + e.message);
    }
}

module.exports = add;
