'use strict';
require('../bootstrap.js');
var ExampleConnector = require('../../lib/connectors/example_connector');
var expect = require('chai').expect;
describe('ExampleConnector', function () {
  describe('#connect', function () {
    it('should return a null as a promise', function () {
      return expect(new ExampleConnector().connect()).to.become(null);
    });
    it('should return an error as a callback',function(done){
      new ExampleConnector().connect(function(err,value){
        /* jshint -W030 */
        expect(err).to.not.exist;
        expect(value).to.eql(null);
        done();
      });
    });
  });
});
