const { OvertimeApplyRecordCollection } = require("../../data/models");
const {API,tryExecute} = require("../../utils");

async function reject(req,res){
    tryExecute(res,"加班记录申请-拒绝请求",async () => {
        const data = await OvertimeApplyRecordCollection.deleteOne({_id:req.query.id});
        API.success(res,data)
    })
}

module.exports = reject;
