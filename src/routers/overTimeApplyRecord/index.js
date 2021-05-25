const express = require('express');

const query = require('./query');
const add = require('./add');
const reject = require('./reject');
const pass = require('./pass');

const router = express.Router();

router.post('/add',add);
router.post('/query',query);
router.get('/reject',reject);
router.get('/pass',pass);

module.exports = router;
