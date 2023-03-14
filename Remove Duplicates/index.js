function removeDuplicates() {
    let cartInput = document.getElementById("cart-input").value;
    let items = cartInput.split("\n");
    let uniqueItems = [];
  
    for (let i = 0; i < items.length; i++) {
      if (!uniqueItems.includes(items[i])) {
        uniqueItems.push(items[i]);
      }
    }
  
    let result = document.getElementById("result");
    result.textContent = `Your cart without duplicates: ${uniqueItems.join("\n")}.`;
  }
  