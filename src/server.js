const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { studyRecord,user } = require('./routers');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/study-record',studyRecord);
app.use('/user',user);

app.listen(8011,()=>{
    console.log('成功启动！')
});
