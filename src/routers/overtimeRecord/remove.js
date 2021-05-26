const {API,tryExecute} = require("../../utils");
const {OvertimeRecordCollection} = require('../../data/models');

async function remove(req,res,next){
    tryExecute(res,"删除OvertimeRecord数据",async ()=>{
        await OvertimeRecordCollection.deleteOne({_id:req.query.id});
        API.success(res);
    })
}

module.exports = remove;
