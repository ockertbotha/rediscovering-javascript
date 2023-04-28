const placeOrder = function(id, amount, shipping=(amount>20?5:10), date=new Date()) {
  console.log(' shipping charge for id: ' + 
    id + ' is $' + shipping + ' Date:' + date.toLocaleDateString());
};

placeOrder(1, 12.10, undefined, new Date('05/15/2018'));
placeOrder(1, 25.20, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.30);
placeOrder(1, 25.20);