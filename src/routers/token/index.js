const express = require('express');
const validate = require('./validate');
const {config} = require('../../base');

const expressJwt = require('express-jwt');
const jwtAuth = expressJwt({
    secret: config.secret,
    algorithms: ['HS256'],
    getToken:(req)=>{
        return req.headers.uuid;
    }
    // credentialsRequired: false
}).unless({
    path: ['/user/login']
});//这里设置的不需要验证的接口

const router = express.Router();
router.use(jwtAuth);
router.use(validate)

module.exports = router;
