async function tryExecute(errorTip,callback){
    try{
        return await callback();
    }catch (e){
        const message = errorTip + '：' + e.message;
        API.fail(res,message);
        console.error(message);
    }
}

module.exports = tryExecute;
