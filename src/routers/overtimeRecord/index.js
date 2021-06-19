const express = require('express');
const multer  = require('multer');

const query = require('./query');
const add = require('./add');
const remove = require('./remove');
const upload = require('./upload');
const download = require('./download');

const router = express.Router();

router.post('/add',add);
router.post('/query',query)
router.get('/remove',remove)
router.post('/upload',multer().any(),upload)
router.get('/download',download);

module.exports = router;
