const {API,tryExecute} = require("../../utils");
const {OvertimeRecordCollection} = require('../../data/models');

async function add(req,res,next){
    tryExecute("新增TimeRecord数据报错",async ()=>{
        await OvertimeRecordCollection.create(req.body);
        API.success(res);
    })
}

module.exports = add;
