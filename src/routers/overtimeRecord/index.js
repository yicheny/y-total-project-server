const express = require('express');

const add = require('./add');

const router = express.Router();

router.post('/add',add);

module.exports = router;
