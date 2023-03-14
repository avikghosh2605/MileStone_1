function capitalizeName() {
    let nameInput = document.getElementById("name-input").value;
    let capitalized = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
    let result = document.getElementById("result");
  
    nameInput.charAt(0) === nameInput.charAt(0).toLowerCase() ? result.textContent = capitalized : result.textContent = nameInput;
  }
  