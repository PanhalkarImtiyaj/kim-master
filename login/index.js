  // Toggle password visibility
  const togglePassword = document.querySelector('.toggle-password');
  const passwordInput = document.getElementById('password');

  togglePassword.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      this.classList.toggle('bx-hide');
      this.classList.toggle('bx-show');
  });

  // Form submission
  document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your login logic here
      console.log('Login submitted');
  });