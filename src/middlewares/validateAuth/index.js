const {API} = require('../../utils');
const {config} = require('../../base');

function isManager(user){
    return user.authority > 2;
}

const managerAuthUrls = [
    '/overtime-record/remove',
    '/overtime-record/add',
    '/overtime-apply-record/pass'
]
function isManagerUrls(url){
    return managerAuthUrls.some((x)=>(url.startsWith(x) || x===url));
}

function validateAuth(req,res,next){
    if(config.noValidateUrls.includes(req.url)) return next();//免登录接口
    if(req.auth === undefined) return API.fail(res,'缺少用户信息！')
    if(isManager(req.auth.token)) return next();//管理员权限无需验证
    if(!isManagerUrls(req.url)) return next();//普通用户可以访问的页面
    API.fail(res,'用户权限不足！')//普通用户无法访问的页面
}
module.exports = validateAuth;

