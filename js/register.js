/**
 * REGISTER.JS
 * Input verification, confirmation password matching, and registration state flow.
 */

function handleRegisterSubmit(e) {
  e.preventDefault();
  const pass = document.getElementById('r-pass').value;
  const cpass = document.getElementById('r-cpass').value;
  const terms = document.getElementById('r-terms').checked;

  if (pass !== cpass) {
    alert('Passwords do not match. Please re-enter.');
    return;
  }

  if (!terms) {
    alert('You must accept the Terms and Conditions.');
    return;
  }

  showToast('Account registered successfully! Redirecting to login...');
  document.getElementById('registerForm').reset();
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
}