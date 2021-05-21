const express = require('express');

const query = require('./query');
const add = require('./add');

const router = express.Router();

router.post('/add',add);
router.get('/query',query)

module.exports = router;
