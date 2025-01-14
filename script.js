// Generate random CAPTCHA (numbers and letters)
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captchaValue').textContent = captcha;
    return captcha;
}

// Store CAPTCHA value globally
let captchaValue = generateCaptcha();

// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userInputCaptcha = document.getElementById('captchaInput').value;
    const errorMessage = document.getElementById('errorMessage');

    // Debugging logs (can be removed in production)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Captcha:', userInputCaptcha);
    console.log('Captcha Value:', captchaValue);

    // Validate password length
    if (password.length < 8) {
        errorMessage.textContent = 'Password harus memiliki panjang minimal 8 karakter.';
        errorMessage.style.display = 'block';
        return false;
    }

    // Validate CAPTCHA
    if (userInputCaptcha !== captchaValue) {
        errorMessage.textContent = 'CAPTCHA salah, coba lagi!';
        errorMessage.style.display = 'block';
        captchaValue = generateCaptcha(); // Regenerate CAPTCHA
        return false;
    }

    // Validate email and password
    if (email === 'sayakamu@gmail.com' && password === 'Password123') {
        // Redirect to home.html
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Email atau password salah!';
        errorMessage.style.display = 'block';
    }
});
