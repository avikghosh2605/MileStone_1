function countVowels() {
    let nameInput = document.getElementById("name-input").value;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
  
    for (let i = 0; i < nameInput.length; i++) {
      if (vowels.includes(nameInput.charAt(i).toLowerCase())) {
        vowelCount++;
      }
    }
  
    let result = document.getElementById("result");
    result.textContent = `The number of vowels in your name is ${vowelCount}.`;
  }
  