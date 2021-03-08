const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const studyRecord = require('./routers/studyReacord');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/study-record',studyRecord);

app.listen(8011,()=>{
    console.log('成功启动！')
});
