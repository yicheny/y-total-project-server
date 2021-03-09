const fs = require('fs').promises;
const _ = require('lodash')
const multer = require('multer');
const {compose} = require("../../utils");
const StudyRecordCollection = require("../../data/models/StudyRecord");

const savePath = './static/';
const uploadFileMulter = multer({dest: savePath})

async function uploadFile(req, res, next){
    try{
        // console.log('req',req.files);
        const {filename,originalname} = req.files[0];
        const oldPath = savePath.concat(filename);
        const newPath = savePath.concat(originalname);
        await fs.rename(oldPath,newPath)
        const text = await fs.readFile(newPath,'utf-8');
        const data = transformDataFromText(text,newPath);
        const {isClear} = req.body;
        if(isClear==='true') await StudyRecordCollection.deleteMany();
        await StudyRecordCollection.create(data);
        res.end('success');
    }catch (e){
        const errorInfo = "上传StudyRecord报错：" + e.message;
        console.log(errorInfo);
        // res.status(401).send(errorInfo);
    }
}

exports.uploadFile = uploadFile;
exports.uploadFileMulter = uploadFileMulter;

function transformDataFromText(text,path){
    const infoList = compose(filterEmptyInfo,infoListFor)(text);
    return infoList.map(createInfoItem);

    function infoListFor(infoText){
        return infoText.split('\n');
    }

    function filterEmptyInfo(list){
        return list.filter(x=>x);
    }

    function createInfoItem(x){
        const [date,time,info] = x.split("===");
        return {
            date:`${getYearFromPath()}-${date.trim()}`,
            time:time.trim(),
            info:createInfoObject(info)
        }

        function createInfoObject(infoText){
            const infoList = infoText.trim().split('&&').map(x=>x.trim());
            return {
                studyInfo:getStudyInfoList(),
                reviewInfo:getReviewInfoList()
            }

            function getStudyInfoList(){
                return infoList.filter(x=>!isReviewInfo(x));
            }

            function getReviewInfoList(){
                return infoList.filter(isReviewInfo);
            }

            function isReviewInfo(info){
                return info.includes("review::")
            }
        }
    }

    function getYearFromPath(){
        const fileName = _.tail(path.split('/'));
        return (new RegExp(/\d+/ig)).exec(fileName)[0]
    }
}
