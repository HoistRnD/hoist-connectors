'use strict';
var BaseConnector = require('./base_connector');
var util = require('util');
var BBPromise = require('bluebird');

var ExampleConnector = function(){

};

util.inherits(ExampleConnector, BaseConnector);

ExampleConnector.prototype.connect = function(callback){
  return BBPromise.resolve(null).nodeify(callback);
};

module.exports = ExampleConnector;
