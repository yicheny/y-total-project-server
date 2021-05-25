const {API,tryExecute} = require("../../utils");
const {OvertimeApplyRecordCollection} = require('../../data/models');

async function add(req,res,next){
    tryExecute("新增加班记录申请报错",async ()=>{
        await OvertimeApplyRecordCollection.create(req.body);
        API.success(res);
    })
}

module.exports = add;
