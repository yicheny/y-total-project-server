const { OvertimeApplyRecordCollection,OvertimeRecordCollection } = require("../../data/models");
const {API,tryExecute} = require("../../utils");
const _ = require('lodash');

async function pass(req,res){
    tryExecute(res,"加班记录申请-通过请求",async ()=>{
        const data = await OvertimeApplyRecordCollection.findOneAndRemove({_id:req.query.id});
        await OvertimeRecordCollection.create(_.omit(data,['_id']));
        API.success(res,data)
    })
}

module.exports = pass;
