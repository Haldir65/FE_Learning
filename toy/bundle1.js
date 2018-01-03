'use strict';

var args = ['a', 'b'];
// import { data } from "./supplier.js";

var third = require('./library/third');

// import firstGreet from './library/first';


var myFun = function myFun() {
    console.log('stuff');
};

var newFun = function newFun() {
    console.log('new stuff');
};

// console.log(data);

third.greet(100);

// firstGreet();
