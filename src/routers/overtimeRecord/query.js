const { OvertimeRecordCollection } = require("../../data/models");
const {API} = require("../../utils");

function defaultAll(value,filter){
    return value===undefined ? {$ne:undefined} : filter;
}

async function query(req,res){
    try{
        const {name,date,duration,createdAt} = req.body;
        const data = await OvertimeRecordCollection.find({
            name:defaultAll(name,{$in:name}) ,
            date:defaultAll(date,{$gte:date}),
            duration:defaultAll(duration,{$in:duration}),
            createdAt:defaultAll(createdAt,{$gte:createdAt})
        });
        API.success(res,data)
    }catch (e){
        const message = "查询OvertimeRecord报错：" + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = query;
