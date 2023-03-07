'use strict';

console.log(message);

console.log('Enterting loop');
for(var i = 0; i < 3; i++) {
    console.log(message); //visible here, but undefined
    var message = 'spill ' + i;
}

console.log('Exiting loop');

console.log(message);