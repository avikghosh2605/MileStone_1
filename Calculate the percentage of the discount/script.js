let calculateDiscount = (originalPrice,discountedPrice) =>{
    let discount = originalPrice-discountedPrice;
    let discountPercentage = (discount/originalPrice)*100;
    return discountPercentage.toFixed(2);
};