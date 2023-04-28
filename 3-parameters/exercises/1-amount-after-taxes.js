
const amountAfterTaxes = function (
  amount,
  fedTax = 0,
  stateTax = 0,
  localTax = 0
) {
  const fedAmount = amount * (fedTax * 0.01);
  const stateAmount = amount * (stateTax * 0.01);
  const localAmount = amount * (localTax * 0.01);

  return (amount + fedAmount + stateAmount + localAmount);
};

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(amount));
console.log(amountAfterTaxes(amount, fedTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax));