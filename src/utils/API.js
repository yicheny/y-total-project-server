class API{
    static success(res,data=null,message="请求成功"){
        const info = {
            code:0,
            data,
            message
        };
        res.status(200).send(info);
    }

    static fail(res,message='请求失败'){
        const info = {
            code:2000,
            data:null,
            message
        };
        res.status(200).send(info);
    }
}

module.exports = API;
