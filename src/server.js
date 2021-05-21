const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { studyRecord, user, token,overtimeRecord } = require('./routers');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));

app.use(token);
app.use('/user', user);
app.use('/study-record', studyRecord);
app.use('/overtime-record',overtimeRecord)

app.listen(8011, () => {
    console.log('成功启动！')
});
