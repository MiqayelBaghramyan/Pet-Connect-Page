const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const email = document.getElementById("mail");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);



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


function validateForm() {
  let emailValue = email.value;
  let passwordValue = password.value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  emailError.innerText = "";
  passwordError.innerText = "";

  if (emailValue.trim() === "") {
    emailError.innerText = "Адрес ел. почты обязателен";
  } else if (!emailRegex.test(emailValue)) {
    emailError.innerText = "Неверный формат электронной почты";
  }


  if (passwordValue.trim() === "") {
    passwordError.innerText = "Необходим пароль";
  } else if (!passwordRegex.test(passwordValue)) {
    passwordError.innerText =
      "Пароль должен иметь длину не менее 8 символов и содержать хотя бы одну букву и одну цифру.";
  }

  if (emailError.innerText === "" && passwordError.innerText === "") {
    localStorage.setItem('email', emailValue);
    localStorage.setItem('password', passwordValue);

    window.location.href = "profile/profile.html";

    return false;
  } else {
    return false;
  }
}


let previousColor = "#3F3835";

document.getElementById('svgIcon').addEventListener('click', function () {
  let currentColor = this.getAttribute('fill');

  if (currentColor === '#59A084') {
    this.setAttribute('fill', previousColor);
  } else {
    previousColor = currentColor;
    this.setAttribute('fill', '#59A084');
  }
});

document.getElementById('textIcon').addEventListener('click', function () {

  let currentColor = document.getElementById('svgIcon').getAttribute('fill');

  if (currentColor === '#59A084') {
    document.getElementById('svgIcon').setAttribute('fill', previousColor);
  } else {
    previousColor = currentColor;
    document.getElementById('svgIcon').setAttribute('fill', '#59A084');
  }
});





const chitatButtons = document.querySelectorAll('.chitat');


chitatButtons.forEach(button => {
  button.addEventListener('click', function () {
    window.location.href = 'help shelters/helpshelters.html';
  });
});

const perytiBtn = document.getElementById("pereytiBtn");

perytiBtn.addEventListener("click", () => {
  window.location.href = 'help shelters/helpshelters.html';
})



let btn = document.querySelector(".btn_header");

btn.addEventListener("click", () => {
  window.location.href = "page Create Add/PageCreateAdd.html";
});
