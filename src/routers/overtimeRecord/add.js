const {API,tryExecute} = require("../../utils");
const {OvertimeRecordCollection} = require('../../data/models');

async function add(req,res,next){
    tryExecute(res,"新增OvertimeRecord数据",async ()=>{
        await OvertimeRecordCollection.create(req.body);
        API.success(res);
    })
}

module.exports = add;
