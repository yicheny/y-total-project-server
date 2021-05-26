const {API,tryExecute} = require("../../utils");
const {OvertimeApplyRecordCollection} = require('../../data/models');

async function add(req,res,next){
    tryExecute(res,"新增加班记录申请",async ()=>{
        await OvertimeApplyRecordCollection.create(req.body);
        API.success(res);
    })
}

module.exports = add;
