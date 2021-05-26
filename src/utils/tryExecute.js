const {API} = require('./index');

async function tryExecute(res,errorTip,callback){
    try{
        return await callback();
    }catch (e){
        const message = errorTip + '报错：' + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = tryExecute;
