const express = require('express');

const query = require('./query');
const add = require('./add');
const reject = require('./reject');

const router = express.Router();

router.post('/add',add);
router.post('/query',query);
router.get('/reject',reject);

module.exports = router;
