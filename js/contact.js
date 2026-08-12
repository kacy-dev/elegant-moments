/**
 * CONTACT.JS
 * Controls contact form interaction, front-end field validation, and FAQ accordions.
 */

function handleContactSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  
  if (form.checkValidity()) {
    showToast('Thank you! Your inquiry has been sent successfully.');
    form.reset();
  } else {
    showToast('Please fill out all required fields properly.');
  }
}

function toggleFaq(element) {
  element.classList.toggle('active');
}