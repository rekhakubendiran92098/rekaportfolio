// Toggle menu on small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple form submission simulation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(name && email && message) {
    formMessage.style.color = 'green';
    formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    form.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill in all fields before submitting.';
  }
});
