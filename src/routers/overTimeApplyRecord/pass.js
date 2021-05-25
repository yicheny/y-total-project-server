const { OvertimeApplyRecordCollection,OvertimeRecordCollection } = require("../../data/models");
const {API} = require("../../utils");
const _ = require('lodash');

async function pass(req,res){
    try{
        const data = await OvertimeApplyRecordCollection.findOneAndRemove({_id:req.query.id});
        await OvertimeRecordCollection.create(_.omit(data,['_id']));
        API.success(res,data)
    }catch (e){
        const message = "加班记录申请-通过请求报错：" + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = pass;
