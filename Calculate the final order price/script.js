let totalCost = (cart) => {
    let cost = 0;
    for (let item of cart) {
      cost += item.unitPrice * item.quantaty;
    }
    return cost;
  };
  