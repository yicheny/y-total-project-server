const { OvertimeApplyRecordCollection } = require("../../data/models");
const {API} = require("../../utils");

async function reject(req,res){
    try{
        const data = await OvertimeApplyRecordCollection.deleteOne({_id:req.query.id});
        API.success(res,data)
    }catch (e){
        const message = "加班记录申请-拒绝请求报错：" + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = reject;
