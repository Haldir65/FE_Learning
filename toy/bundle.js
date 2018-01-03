'use strict';

var _supplier = require('./supplier.js');

var args = ['a', 'b'];


var myFun = function myFun() {
    console.log('stuff');
};

var newFun = function newFun() {
    console.log('new stuff');
};

console.log(_supplier.data);
