'use strict';
var BBPromise = require('bluebird');
var BaseConnector = function () {

};

BaseConnector.prototype = {
  connect: function (callback) {
    return BBPromise.reject(new Error("this method must be overridden")).nodeify(callback);
  }
};

module.exports = BaseConnector;
