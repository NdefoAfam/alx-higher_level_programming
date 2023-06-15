#!/usr/bin/node

const list = require('./100-data');

const newList = list.map((value, index) => value * index);

console.log('Initial list:');
console.log(list);

console.log('New list:');
console.log(newList);
