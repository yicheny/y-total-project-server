const _ = require('lodash');
const multiparty = require('multiparty');
const {API} = require("../../utils");
const { UserCollection } = require("../../data/models");

async function login(req,res,next){
    try{
        const formParams = await getFormParams(req);
        const userInfo = await UserCollection.find(_.pick(formParams,['name','password']));
        if(userInfo.length === 0) return API.fail(res,'用户不存在或密码错误');
        if(userInfo.length > 1) return API.fail(res,'异常：查找到多个用户');
        API.success(res,{uuid:'cctv'})
    }catch(e){
        console.error("登录出错:" + e.message);
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
