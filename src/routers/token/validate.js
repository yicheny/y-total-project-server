const _ = require("lodash");
const {API} = require('../../utils');

async function validate(err,req,res,next){
    if(_.get(err,'name') === 'UnauthorizedError'){
        return API.fail(res,'非法token',2007);
    }
}

module.exports = validate;
