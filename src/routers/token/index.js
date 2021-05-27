const express = require('express');
const validate = require('./validate');
const {config} = require('../../base');

const expressJwt = require('express-jwt');
const jwtAuth = expressJwt({
    secret: config.secret,
    algorithms: ['HS256'],
    getToken:(req)=>{
        return req.headers.uuid || req.query.uuid;
    },
    requestProperty:'auth.token'
    // credentialsRequired: false
}).unless({
    path: config.noValidateUrls
});//这里设置的不需要验证的接口

const router = express.Router();
router.use(jwtAuth);
router.use(validate)

module.exports = router;
