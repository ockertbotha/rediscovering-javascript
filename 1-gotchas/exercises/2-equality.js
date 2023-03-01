// Will return true because of coercion
function first() {
    return "2.0" / 2 * "2.0" == 2 / 2 * 2;
}

// Will return false because of type mismatch.
function second() {
    return "2.0" / 2 * "2.0" === 2 / 2 * 2;
}

console.log(first());
console.log(second());