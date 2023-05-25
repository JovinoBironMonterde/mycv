function navbarscroll() {
  var myNav = document.getElementById("mynavbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 80) {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  } else {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-colored nav-transparent");
  }
}
window.addEventListener("scroll", navbarscroll);

// TYPING ANIMATION
const text = ["Web Developer", "Web Designer", "Blogger"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".anim-skill").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
  typeSpeed: 100;
  backSpeed: 60;
  loop: true;
})();







