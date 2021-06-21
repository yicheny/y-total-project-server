const {API,tryExecute} = require("../../utils");
const xlxs = require('xlsx');
const {OvertimeRecordCollection} = require('../../data/models');

async function upload(req,res,next){
    tryExecute(res,"上传OvertimeRecord数据",async ()=>{
        const buffer = req.files[0].buffer;
        const result = xlxs.read(buffer,{type:'buffer'})
        // console.log(result.Sheets.Sheet1);
        console.log(xlxs.utils.sheet_to_json(result.Sheets.Sheet1))
        API.success(res);
    })
}

module.exports = upload;
