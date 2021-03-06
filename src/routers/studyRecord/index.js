const express = require('express');

const query = require('./query');
const add = require('./add');
const deleteMany = require('./deleteMany');
const {uploadFile,uploadFileMulter} = require('./uploadFile');
const downloadFile = require('./downloadFile');

const router = express.Router();
router.get('/query',query);
router.get('/add',add);
router.post('/delete',deleteMany);
router.post('/uploadFile',uploadFileMulter.any(),uploadFile);
router.get('/downloadFile',downloadFile);

module.exports = router;
