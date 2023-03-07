//Broken Code
'use strict';

const sam = Object.freeze({ first: 'Sam', age: 2 });

//sam = {}; Reference remains immutable

sam.age = 3;

console.log(sam.age);