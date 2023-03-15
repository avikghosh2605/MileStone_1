const form = document.querySelector('form');
      const emailInput = document.querySelector('#email');
      const passwordInput = document.querySelector('#password');
      const resultPara = document.querySelector('#result');
      
      form.addEventListener('submit', (event) => {
        event.preventDefault();
      
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
      
        if (emailValue.includes('@') && passwordValue.length >= 8) {
          resultPara.textContent = 'Valid email and password!';
          resultPara.style.color = 'green';
        } else {
          resultPara.textContent = 'Invalid email or password!';
          resultPara.style.color = 'red';
        }
      });