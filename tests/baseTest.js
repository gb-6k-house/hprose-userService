/**
 * Created by niupark on 2017/3/28.
 */

var logger = new require('../utils/logger').init( __dirname +"/../configes/log4js.json");
process.logger = logger;
var confige = require('./../configes/confige');

var hprose = require('hprose');

var client = hprose.Client.create(confige.tcpHost);

function Base(){

};

Base.prototype.on = function(event,callback){
}
Base.prototype.emit= function(event, data){
}
Base.prototype.rpcServer = client;

module.exports = Base;
