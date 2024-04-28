function validateForm() {
    const username = document.forms["registrationForm"]["username"].value;
    const email = document.forms["registrationForm"]["email"].value;
    const password = document.forms["registrationForm"]["password"].value;
    const confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    const phone = document.forms["registrationForm"]["phone"].value;
  
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[A-Za-z\d@#$]{8,}$/;
  
    if (!alphanumericRegex.test(username) || username.length < 3 || username.length > 20) {
      alert("Username must contain only alphanumeric characters (3-20 characters).");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    if (!phone.match(/^\+91 [0-9]{10}$/)) {
      alert("Please enter a valid phone number in the format +91 1234567890.");
      return false;
    }
  
    return true;
  }
  