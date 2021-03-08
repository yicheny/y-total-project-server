async function downloadFile(req, res, next){
    try{
        res.download("./static/studyTimeData-2021.txt");
    }catch (e){
        console.error("下载StudyRecord报错：" + e.message)
    }
}

module.exports = downloadFile;
