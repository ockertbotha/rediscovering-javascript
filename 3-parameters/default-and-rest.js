const product = function(first, second = 1, ...moreValues) {
  console.log(first + ', ' + second + ', length: ' + moreValues.length);
};

product(10);
product(10,20);
product(10,20,30);
product(10,20,30,40);