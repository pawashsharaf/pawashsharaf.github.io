const form = document.querySelector('form');
const createAccountBtn = document.getElementById('create_account_btn');
const facebookBtn = document.getElementById('facebook_btn');
const googleBtn = document.getElementById('google_btn');
const closeBtn = document.getElementById('close_btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate form fields
  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;

  if (firstName.trim() === '') {
    alert('Please enter your first name');
    return;
  }

  if (lastName.trim() === '') {
    alert('Please enter your last name');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email');
    return;
  }

  if (password.trim() === '') {
    alert('Please enter your password');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // If form is valid, create new user account
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };

  // Save user data to database or API endpoint

  alert('Account created successfully');

  // Close the form
  closeForm();
});

facebookBtn.addEventListener('click', function() {
  // Handle Facebook login
  alert('Facebook login not yet implemented');
});

googleBtn.addEventListener('click', function() {
  // Handle Google login
  alert('Google login not yet implemented');
});

closeBtn.addEventListener('click', function() {
  closeForm();
});

function closeForm() {
  // Hide the form
  const formContainer = document.getElementById('form_container');
  formContainer.style.display = 'none';

  // Reset the form fields
  form.reset();
}
