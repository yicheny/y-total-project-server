class API{
    static success(res,data=null,message="请求成功"){
        const info = {
            code:0,
            data,
            message
        };
        res.status(200).send(info);
    }
}

module.exports = API;
