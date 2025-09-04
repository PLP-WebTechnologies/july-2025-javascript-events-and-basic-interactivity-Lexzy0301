// ==========  Event Handling ==========
let msgBtn = document.getElementById("msgBtn");
let msgOutput = document.getElementById("msgOutput");

msgBtn.addEventListener("click", function() {
  msgOutput.textContent = "🎉 A 20% Bonus Offer If You Trade Wuith Us Today! 🎉";
});

// ========== Interactive Elements ==========

// Light/Dark Mode Toggle
let toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
let countValue = document.getElementById("countValue");

document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  countValue.textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
  count--;
  countValue.textContent = count;
});

// FAQ Toggle
let faqToggle = document.querySelector(".faq-toggle");
let faqContent = document.querySelector(".faq-content");

faqToggle.addEventListener("click", function() {
  faqContent.style.display = faqContent.style.display === "block" ? "none" : "block";
});

// ========== Form Validation ==========
let form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let valid = true;

  // Name validation
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (regex)
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("Successful").textContent = "✅ Successfully Submitted!";
    form.reset();
  }
});
