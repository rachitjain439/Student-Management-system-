document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    const loginForm = document.querySelector('#loginForm');
    const loginBtn = document.querySelector('.login-btn');

    // Toggle password visibility
    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // Form submission simulation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const originalText = loginBtn.innerText;
        loginBtn.innerText = 'Signing In...';
        loginBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            loginBtn.innerText = 'Success!';
            loginBtn.style.background = '#4CAF50';
            loginBtn.style.color = 'white';
            
            setTimeout(() => {
                loginBtn.innerText = originalText;
                loginBtn.disabled = false;
                loginBtn.style.background = 'white';
                loginBtn.style.color = '#333';
                loginForm.reset();
            }, 2000);
        }, 1500);
    });
});
