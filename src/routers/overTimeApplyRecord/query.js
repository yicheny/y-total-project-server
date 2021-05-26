const { OvertimeApplyRecordCollection } = require("../../data/models");
const {API,tryExecute} = require("../../utils");

async function query(req,res){
    tryExecute(res,'查询加班记录申请',async ()=>{
        const data = await OvertimeApplyRecordCollection.find();
        API.success(res,data)
    })
}

module.exports = query;
