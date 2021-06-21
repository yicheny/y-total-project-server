const {tryExecute} = require("../../utils");
const XLSX = require('xlsx');
const {OvertimeRecordCollection} = require('../../data/models');
const _ = require('lodash');

async function download(req,res){
    tryExecute(res,"下载OvertimeRecord数据",async ()=>{
        const data = await OvertimeRecordCollection.find();
        const wb = getWorkBook(data);
        XLSX.writeFile(wb,'./static/加班记录.xlsx',{
            bookType:"xlsx"
        })
        res.download("./static/加班记录.xlsx");
    })
}

module.exports = download;

const HeaderEnums = {
    name:'name',
    date:'date',
    duration:'durataion',
    memo:'memo',
    used:'used',
    createdAt:'createdAt'
}

function getWorkBook(data){
    const ws = XLSX.utils.json_to_sheet(getSheetData(data),getOptions());
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'sheetOne');
    return wb;

    function getOptions(){
        return {
            header: [
                HeaderEnums.name,
                HeaderEnums.date,
                HeaderEnums.duration,
                HeaderEnums.memo,
                HeaderEnums.createdAt,
                HeaderEnums.used,
            ],
            skipHeader:true
        }
    }

    function getSheetData(data){
        return getHeader().concat(getContent(data));

        function getContent(){
            return _.map(data,(x)=>{
                return {
                    [HeaderEnums.name]:x.name,
                    [HeaderEnums.date]:x.date,
                    [HeaderEnums.duration]:x.duration,
                    [HeaderEnums.memo]:x.memo,
                    [HeaderEnums.used]:x.used ? '是' : '否',
                    [HeaderEnums.createdAt]:x.createdAt
                }
            });
        }

        function getHeader(){
            return [
                {
                    [HeaderEnums.name]:"姓名",
                    [HeaderEnums.date]:"日期",
                    [HeaderEnums.duration]:"时长",
                    [HeaderEnums.memo]:"备注",
                    [HeaderEnums.used]:"是否使用",
                    [HeaderEnums.createdAt]:"创建时间"
                }
            ]
        }
    }
}
