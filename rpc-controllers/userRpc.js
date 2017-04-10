/**
 * Created by niupark on 16/3/2.
 */
/*
 *获取全网注册用户
 *
 */
'use strict'
var Promise = require('promise')

const logger = process.logger
const confige = require('../configes/confige')
var uuid = require('uuid')



/*
 *@接口名
 *@描述 用户名密码注册
 * 算法:
 *@入参数{
 * name: //用户名字符串
 * pwd: 密码
 * }
 * @返回参数{
 * cb 回调函数，func cb(v)，其中v = {
 *  code: 0
 *  value:
 * }
 * */
exports.signUp= function (name, pwd) {
    logger.info("进入。。signUp")
    /*
       如果已经注册则返回code = 1
       如果失败 code = -1
       成功code = 0, v = token
     */
    var token = uuid.v1()
    logger.info("token = " + token)

    return Promise.resolve(token)
}
/*
 *@接口名
 *@描述 用户名密码获取认证token
 * 算法:
 *@入参数{
 * name: //用户名字符串
 * pwd: 密码
 * }
 * @返回参数{
 * cb 回调函数，func cb(e, token)
 * }
 * */
exports.signIn= function (name, pwd) {
    logger.info("进入。。signIn")
    var token = uuid.v1()
    return Promise.resolve(token)
}

/*
 *@接口名
 *@描述 校验认证token
 * 算法:
 *@入参数{
 * token: //符串
 * }
 * @返回参数{
 * cb 回调函数，func cb(e)
 * }
 * */
exports.vertifyToken = function (token, cb) {
    logger.info("进入。。vertifyToken")
    typeof cb === 'function' && cb(true)
}


/*
 *@接口名
 *@描述 验证码生成函数
 * 算法:
 *@入参数
 *@返回参数{
 * }
 * */

function identifyCode(length) {
    var code = ""
    var selectCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for(var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * 10)
        code += selectCode[charIndex]
    }
    logger.info("验证码 : " + code)
    return code
}




