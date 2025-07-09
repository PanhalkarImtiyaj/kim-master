// Toggle password visibility
const togglePasswordIcons = document.querySelectorAll('.toggle-password');
const passwordInputs = document.querySelectorAll('input[type="password"]');

togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.classList.toggle('bx-hide');
        this.classList.toggle('bx-show');
    });
});

// Password strength meter
const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strengthMeter');
const signupBtn = document.getElementById('signupBtn');

passwordInput.addEventListener('input', function() {
    const strength = calculatePasswordStrength(this.value);
    strengthMeter.style.width = strength * 25 + '%';
    
    if (strength < 2) {
        strengthMeter.style.backgroundColor = '#e74c3c';
    } else if (strength < 4) {
        strengthMeter.style.backgroundColor = '#f39c12';
    } else {
        strengthMeter.style.backgroundColor = '#2ecc71';
    }
});

function calculatePasswordStrength(password) {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Character type checks
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    return strength;
}

// Form validation
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate passwords match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Simulate form submission
    signupBtn.disabled = true;
    signupBtn.textContent = 'Creating Account...';
    
    setTimeout(() => {
        alert('Account created successfully! Redirecting to dashboard...');
        signupForm.reset();
        signupBtn.disabled = false;
        signupBtn.textContent = 'Create Account';
        // In a real app, you would redirect here
    }, 1500);
});
