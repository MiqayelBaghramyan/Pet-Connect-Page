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



document.getElementById("toggleSwitch").addEventListener("change", function() {
  if(this.checked) {
    // Toggle is checked
    console.log("Toggle is checked");
  } else {
    // Toggle is not checked
    console.log("Toggle is not checked");
  }
});