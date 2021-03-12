[TOC]

首先理一下`token`相关的逻辑
1. 设置加密密钥，加密算法，及http请求体中的哪个数据作为`token`验证
1. 请求登录接口，确认用户存在后，生成对应的`token`
2. 验证`token`

# 具体实践
## 设置`token`基本信息
```js
const expressJwt = require('express-jwt');
const jwtAuth = expressJwt({
    secret: 'token-key',
    algorithms: ['HS256'],
    getToken:(req)=>{ //通过这个函数的返回值对token做验证
        return req.headers.uuid;//这个很自由，放到body/headers/query/cookies都行
    }
}).unless({
    path: ['/user/login']
});//这里设置的不需要验证的接口

const router = express.Router();
router.use(jwtAuth);
```

## 登录接口生成`token`
```js
const jwt = require('jsonwebtoken');

async function login(req,res,next){
    const userInfo = {
        name:'小明',
        password:'1111'
    }

    const tokenKey = 'token-key';
    const token = jwt.sign(userInfo,tokenKey,{ //注意，这里有个坑：使用mongoose取出来的数据需要使用toJSON()方法
        expiresIn:60*30 //过时时长，单位：秒
    });

    API.success(res,{token});
}
```

## `token`验证
```js
async function validate(err,req,res,next){
    if(_.get(err,'name') === 'UnauthorizedError'){
        return API.fail(res,'非法token');
    }
}
```
