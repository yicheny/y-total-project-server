const _ = require('lodash');
const multiparty = require('multiparty');
const {API} = require("../../utils");
const { UserCollection } = require("../../data/models");
const {config} = require('../../base');
const jwt = require('jsonwebtoken');

async function login(req,res,next){
    try{
        const formParams = await getFormParams(req);
        const userInfoArray = await UserCollection.find(_.pick(formParams,['name','password']));
        if(userInfoArray.length === 0) return API.fail(res,'用户不存在或密码错误');
        if(userInfoArray.length > 1) return API.fail(res,'异常：查找到多个用户');
        const userInfo = _.head(userInfoArray);
        const token = jwt.sign(userInfo.toJSON(),config.secret,{
            expiresIn:60*30 //过时时长，单位：秒
        });
        API.success(res,{ uuid: token })
    }catch(e){
        console.log("登录出错:" );
        console.error(e)
    }
}

module.exports = login;

function getFormParams(req){
    const form = new multiparty.Form();
    return new Promise((resolve,reject)=>{
        form.parse(req,function (err,fields,files){
            if(err) return reject(e);

            const result = {};
            _.forEach(fields,(value,key)=>{
                result[key] = _.head(value);
            })
            resolve(result)
        })
    })
}
