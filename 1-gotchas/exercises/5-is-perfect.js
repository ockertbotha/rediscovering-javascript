const isPerfect = function(number) {
  let sumOfFactors = 0;

  let index = 1;
  for(index; index <= number; index++) {
    if (number % index === 0) {
      sumOfFactors += index;
    }
  }

  return sumOfFactors === number * 2;
};

let i = 1;
for(; i <= 10; i++) {
  console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}