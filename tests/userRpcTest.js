/**
 * Created by niupark on 2017/3/28.
 */

var test = require('./baseTest')
var should = require('should')
function User(){
}

User.prototype = new test(); //建立原型链


describe('user rpc', function () {
    var user = new User();
    describe('signUpWithNameAndPwd', function () {
        it('注册成功必须返回token', function (done) {
            user.rpcServer.ready(function(proxy) {
                proxy.signUpWithNameAndPwd("liukai", "123456", function(token) {
                    should.exist(token)
                    done()
                }, function(name, err) {
                    done(err)
                });

            });
        })
    })

})


