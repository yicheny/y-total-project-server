const {API,tryExecute} = require("../../utils");
const XLSX = require('xlsx');
// const {OvertimeRecordCollection} = require('../../data/models');

async function upload(req,res,next){
    tryExecute(res,"上传OvertimeRecord数据",async ()=>{
        const buffer = req.files[0].buffer;
        const result = XLSX.read(buffer,{type:'buffer'})
        const data = XLSX.utils.sheet_to_json(result.Sheets.Sheet1);
        formatDate(data,['创建时间','加班日期']);
        console.log('data',data);
        API.success(res);
    })
}

module.exports = upload;

function formatDate(data,keys){
    data.forEach(x=>{
        keys.forEach((k)=>{
            x[k] = XLSX.SSF.format('20y-m-d HH:MM:SS',x[k]);
        })
    });
}
