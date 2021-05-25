const { OvertimeRecordCollection } = require("../../data/models");
const {API,tryExecute} = require("../../utils");

function defaultAll(value,filter){
    return value===undefined ? {$ne:undefined} : filter;
}

async function query(req,res){
    tryExecute('查询OvertimeRecord报错',async ()=>{
        const {name,date,duration,createdAt} = req.body;
        const data = await OvertimeRecordCollection.find({
            name:defaultAll(name,{$in:name}) ,
            date:defaultAll(date,{$gte:date}),
            duration:defaultAll(duration,{$in:duration}),
            createdAt:defaultAll(createdAt,{$gte:createdAt})
        });
        API.success(res,data)
    })
}

module.exports = query;
