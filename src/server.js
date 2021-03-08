const express = require('express');
const cors = require('cors');
const studyRecord = require('./routers/studyReacord');

const app = express();
app.use(cors());

app.use('/study-record',studyRecord);

app.listen(8011,()=>{
    console.log('成功启动！')
})
