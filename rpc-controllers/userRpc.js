/**
 * Created by niupark on 16/3/2.
 */
/*
 *获取全网注册用户
 *
 */
'use strict';
const logger = process.logger;
const confige = require('../configes/confige');
var uuid = require('node-uuid');

/*
 *@接口名
 *@描述 用户名密码注册
 * 算法:
 *@入参数{
 * name: //用户名字符串
 * pwd: 密码
 * }
 * @返回参数{
 * cb 回调函数，func cb(e, token)
 * }
 * */
exports.signUpWithNameAndPwd = function (name, pwd, cb) {
    logger.info("进入。。signUpWithNameAndPwd")
    var token = uuid.v1()
    logger.info("token = " + token)
    typeof cb === 'function' && cb(token);
};
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
exports.signInWithNameAndPwd = function (name, pwd, cb) {
    logger.info("进入。。checkInWithNameAndPwd")
    var token = uuid.v1()
    typeof cb === 'function' && cb(token)
};

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
};


