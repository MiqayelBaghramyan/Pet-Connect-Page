const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



let btn = document.querySelector(".btn_header");

btn.addEventListener("click", () => {
  window.location.href = "../page Create Add/PageCreateAdd.html";
});





function openPopup(event) {
  event.preventDefault();

  let popup = document.getElementById("popupContainer");
  popup.style.display = "block";
  document.body.style.overflow = 'hidden'; 

  document.addEventListener("mousedown", closePopupOnClickOutside);
}

function closePopup() {
  let popup = document.getElementById("popupContainer");
  popup.style.display = "none";
  document.body.style.overflow = 'auto';  
  email.value = "";
  password.value = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  document.removeEventListener("mousedown", closePopupOnClickOutside);
}

function closePopupOnClickOutside(event) {
  let popup = document.getElementById("popupContainer");
  if (!popup.contains(event.target)) {
    closePopup();
  }
}




const email = document.getElementById("mail");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");



function validateForm() {
  // Get the values of email and password inputs
  let emailValue = email.value;
  let passwordValue = password.value;

  // Regular expressions for email and password validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Get error span elements
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');

  // Clear any previous error messages
  emailError.innerText = "";
  passwordError.innerText = "";

  // Validate email
  if (emailValue.trim() === "") {
    emailError.innerText = "Адрес ел. почты обязателен";
  } else if (!emailRegex.test(emailValue)) {
    emailError.innerText = "Неверный формат электронной почты";
  }

  // Validate password
  if (passwordValue.trim() === "") {
    passwordError.innerText = "Необходим пароль";
  } else if (!passwordRegex.test(passwordValue)) {
    passwordError.innerText =
      "Пароль должен иметь длину не менее 8 символов и содержать хотя бы одну букву и одну цифру.";
  }

  // Check if there are any error messages
  if (emailError.innerText === "" && passwordError.innerText === "") {
    // Save data to localStorage
    localStorage.setItem('email', emailValue);
    // You shouldn't save the password in plain text, but if you must, you can do so like this:
    localStorage.setItem('password', passwordValue);

    // Redirect to profile page
    window.location.href = "../profile/profile.html";

    // Prevent form submission
    return false;
  } else {
    // Prevent form submission if there are errors
    return false;
  }
}
