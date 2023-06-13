const email = document.getElementById("email");
const submit = document.getElementById("submit");
const error = document.querySelector(".footer__error");

const menuBtn = document.getElementById("menu-btn");
const mobileNavigation = document.querySelector(".header__navigation ul");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.checkValidity()) {
    email.style.outline = "2px solid hsl(0, 94%, 66%)";
    error.style.display = "block";
  } else {
    email.style.outline = "none";
    error.style.display = "none";
  }
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileNavigation.classList.toggle("show");
  document.body.classList.toggle('overlay')
});
