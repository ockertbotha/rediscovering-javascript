var isPrime = function(n) {
    for(i = 2; i < n; i++) {
        if(n % i == 0) return false;
    }

    return n > 1;
}

var sumOfPrimes = function(n) {
    var sum = 0;
    for(y = 1; y <= n; y++) {
        if (isPrime(y)) sum += y;
    }

    return sum;
}

console.log(sumOfPrimes(10));