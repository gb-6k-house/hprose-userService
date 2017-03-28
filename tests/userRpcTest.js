/**
 * Created by niupark on 2017/3/28.
 */

var test = require('./baseTest')
function User(){
}

User.prototype = new test(); //建立原型链

var user = new User();

user.rpcServer.ready(function(proxy) {
    proxy.signInWithNameAndPwd("abc","123", function (e, token) {
        if (e) {
            console.log("signInWithNameAndPwd服务器返回失败");

        }else {
            console.log("服务器返回token " + token);
        }
    }, function(name, err) {
        console.error(err);
    });

    proxy.hello('world', function(result) {
        console.log(result);
    }, function (name, err) {

    });
});
user.rpcServer.ready(function(proxy) {
    proxy.signInWithNameAndPwd("abc","123", function (e, token) {
        if (e) {
            console.log("signInWithNameAndPwd服务器返回失败");

        }else {
            console.log("服务器返回token " + token);
        }
    }, function(name, err) {
        console.error(err);
    });

    proxy.hello('world', function(result) {
        console.log(result);
    }, function (name, err) {

    });
});
