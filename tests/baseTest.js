/**
 * Created by niupark on 2017/3/28.
 */
var confige = require('./../configes/confige');

var hprose = require('hprose');

var rpcServer = hprose.Client.create(confige.tcpHost);

function Base(){

};

Base.prototype.on = function(event,callback){
}
Base.prototype.emit= function(event, data){
}
Base.prototype.rpcServer = rpcServer

module.exports = Base;