// Returns: undefined - illegal character following return
const first = function() {
    return
        2 * 3;
};

// Returns: 6 - * may follow line break after return
const second = function() {
    return 2
        * 3;
};

// Returns: 6 - semi-colon will be inserted on the "return" line.
const third = function() {
    return 2 * 3
    ;
};

console.log(first());
console.log(second());
console.log(third());