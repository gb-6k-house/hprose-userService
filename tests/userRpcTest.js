/**
 * Created by niupark on 2017/3/28.
 */
var test = require('./baseTest')
function User(){
}

User.prototype = new test(); //建立原型链

var user = new User();

user.checkInWithNameAndPwd("abc","123", function (e, token) {
    if (e) {
        console.log("checkInWithNameAndPwd服务器返回失败");

    }else {
        console.log("服务器返回token" + token);
    }
});