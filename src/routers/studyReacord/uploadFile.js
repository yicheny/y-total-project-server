const fs = require('fs').promises;
const multer = require('multer');

const savePath = './static/';
const uploadFileMulter = multer({dest: savePath})

async function uploadFile(req, res, next){
    try{
        // console.log('req',req.files);
        const {filename,originalname} = req.files[0];
        const oldPath = savePath.concat(filename);
        const newPath = savePath.concat(originalname);
        await fs.rename(oldPath,newPath)
        res.end('success');
    }catch (e){
        console.error("查询StudyRecord报错：" + e.message)
    }
}

exports.uploadFile = uploadFile;
exports.uploadFileMulter = uploadFileMulter;
