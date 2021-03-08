const express = require('express');

const query = require('./query');
const add = require('./add');
const deleteAll = require('./deleteAll');
const deleteMany = require('./deleteMany');
const {uploadFile,uploadFileMulter} = require('./uploadFile');

const router = express.Router();

router.get('/query',query);
router.get('/add',add);
router.get('/deleteAll',deleteAll);
router.post('/delete',deleteMany);
router.post('/uploadFile',uploadFileMulter.any(),uploadFile);

module.exports = router;
