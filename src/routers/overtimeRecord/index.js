const express = require('express');

const query = require('./query');
const add = require('./add');
const remove = require('./remove');
const upload = require('./upload');

const router = express.Router();

router.post('/add',add);
router.post('/query',query)
router.get('/remove',remove)
router.post('/upload',upload)

module.exports = router;
