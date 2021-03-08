const express = require('express');
const query = require('./query');
const add = require('./add');

const router = express.Router();

router.get('/query',query);
router.get('/add',add)

module.exports = router;
