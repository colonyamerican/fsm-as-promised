var StateMachine = require('../..'),
    Promise = require('bluebird'),
    chai = require('chai'),
    expect = chai.expect;

global.expect = chai.expect;
global.Promise = Promise;
global.StateMachine = StateMachine;
