'use strict';
require('../bootstrap.js');
var BaseConnector = require('../../lib/connectors/base_connector');
var expect = require('chai').expect;
describe('BaseConnector', function () {
  describe('#connect', function () {
    it('should return an error as a promise', function () {
      return expect(new BaseConnector().connect()).to.be.rejectedWith('this method must be overridden');
    });
    it('should return an error as a callback',function(done){
      new BaseConnector().connect(function(err){
        /* jshint -W030 */
        expect(err).to.exist;
        expect(err.message).to.eql('this method must be overridden');
        done();
      });
    });
  });
});
