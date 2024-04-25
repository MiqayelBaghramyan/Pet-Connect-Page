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

function handleFileSelect() {
  const fileInput = document.getElementById('download_file');
  fileInput.click(); 
}

document.getElementById('fileSelectorButton').addEventListener('click', handleFileSelect);

document.getElementById('fileSelectorButton2').addEventListener('click', handleFileSelect);

document.getElementById('download_file').addEventListener('change', function () {
  const selectedFile = this.files[0];
  console.log('Selected File:', selectedFile);
});



let btn = document.querySelector(".btn_header");

btn.addEventListener("click", () => {
  window.location.href = "../page Create Add/PageCreateAdd.html";
});



function logout() {
  localStorage.removeItem('email');
  localStorage.removeItem('password'); 
  window.location.href = "../index.html";
}
