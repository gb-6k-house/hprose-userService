/**
 * Created by niupark on 16/2/19.
 */
/*
  @by liukai
  主要定义rpc服务提供的接口
* */

var confige = require('../configes/confige');
var userRpc = require('../rpc-controllers/userRpc');

var hprose = require('hprose');



exports.start = function(){
    // rpc 发布接口列表布接口
    var server = new hprose.server(confige.tcpHost);
    // 发布接口列表布接口列表布接口列表
   server.addAsyncFunction(userRpc.checkInWithNameAndPwd)
    // 启动服务
    server.start()
}
