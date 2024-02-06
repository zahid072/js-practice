function layeredDiscount(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200price = 70;

  if (quantity <= 100) {
    const first100Total = 100 * first100Price;
    return first100Total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingTotal = quantity - 100;
    const second100Total = remainingTotal * second100Price;
    const totalPrice = first100Total + second100Total ;
    return totalPrice;
  }else{
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const above200PriceTotal = remainingQuantity * above200price;
    const totalPrice = first100Total + second100Total + above200PriceTotal;
    return totalPrice;
  }
}

console.log(layeredDiscount(233))