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
/*
 *@接口名
 *@描述 用户名密码获取认证token
 * 算法:
 * 有效期不能大于5分钟
 * 用户必须是属于当前企业号
 *@入参数{
 * name: //用户名字符串
 * pwd: 密码
 * }
 * @返回参数{
 * cb 回调函数，func cb(e, token)
 * }
 * */
exports.checkInWithNameAndPwd = function (name, pwd, cb) {
    logger.info("进入。。checkInWithNameAndPwd")
    typeof cb === 'function' && cb(false, name + pwd);
};
