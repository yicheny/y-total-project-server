const {API,tryExecute} = require("../../utils");
const {OvertimeRecordCollection} = require('../../data/models');

async function upload(req,res,next){
    tryExecute(res,"上传OvertimeRecord数据",async ()=>{
        console.log(req.files);
        API.success(res);
    })
}

module.exports = upload;
