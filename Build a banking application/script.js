let customer = {
    name: Abc,
    currentBalancce: 10000,
  };
  
  function deposit(amount) {
    customer.currentBalancce += amount;
  }
  function withdrawal(amount) {
    customer.currentBalancce > amount ? (customer.currentBalancce -= amount) : console.log(`Insufficient funds. Current balance is ${customer.currentBalancce}`);
  }
  