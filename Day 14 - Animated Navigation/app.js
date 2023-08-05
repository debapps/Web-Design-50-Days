const navbar = document.getElementById("navigation");
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
