/**
 * LOGIN.JS
 * Form validation logic and simulation feedback for user authorization logins.
 */

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('l-email').value;
  const pass = document.getElementById('l-pass').value;

  if (email && pass) {
    showToast('Login successful! Welcome back.');
    document.getElementById('loginForm').reset();
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } else {
    showToast('Please enter both email and password.');
  }
}