/**
 * Created by niupark on 16/2/19.
 */
/*
  @by liukai
  主要定义rpc服务提供的接口
* */

var confige = require('../configes/confige');
var userRpc = require('../rpc-controllers/userRpc');
const logger = process.logger;

var hprose = require('hprose');



exports.start = function(){
    // rpc 发布接口列表布接口
    var server =  hprose.Server.create(confige.tcpHost);
    // 发布接口列表布接口列表布接口列表

    function hello(name, callback) {
        setTimeout(function() {
            callback("Hello " + name + "!");
        }, 10);
    }

    server.addAsyncFunction(userRpc.signUpWithNameAndPwd, "signUpWithNameAndPwd")
    server.addAsyncFunction(userRpc.signInWithNameAndPwd, "signInWithNameAndPwd")
    server.addAsyncFunction(userRpc.vertifyToken, "vertifyToken")

    server.addAsyncFunction(hello)


    // 启动服务
    server.start();
}
