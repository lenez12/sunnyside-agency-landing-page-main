const menuToggle = document.querySelector(".toggle-icon");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".fa-bars");
console.log(menuToggle);

const toggleMenu = () => {
	menuToggle.classList.toggle("active");
	navMenu.classList.toggle("active");
};
menuToggle.addEventListener("click", toggleMenu);

const arrowDown = document.querySelector(".arrow-down");
arrowDown.addEventListener("click", () => {});
