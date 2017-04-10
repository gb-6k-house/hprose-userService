/**
 * Created by niupark on 2017/3/28.
 */

var test = require('./baseTest')
var should = require('should')
var rewire = require('rewire')
var logger = process.logger

function User(){
}

User.prototype = new test(); //建立原型链


describe('user rpc', function () {
    var user = new User();
    describe('signUp', function () {
        it('注册成功必须返回token', function (done) {
            user.rpcServer.ready(function(proxy) {
                proxy.signUp().then(function (token){
                    should.exist(token)
                    logger.info("执行完成" + token)
                    done()
                }).catch(function () {
                    done()
                })
                logger.info("调用完成")
            });
        })
    })

})

describe('user private function', function () {
    var rewireUserRpc = rewire('../rpc-controllers/userRpc.js')
    describe('identifyCode', function () {
        it('四位验证码测试，必须返回四位数字', function () {
            var func = rewireUserRpc.__get__('identifyCode')
            should(func(4)).have.length(4)
        })
    })
})


