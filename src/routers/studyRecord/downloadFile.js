async function downloadFile(req, res, next){
    try{
        console.log('downloadFile')
        res.download("./static/studyTimeData-2021.txt");
    }catch (e){
        console.log("下载StudyRecord报错：" + e.message)
    }
}

module.exports = downloadFile;
