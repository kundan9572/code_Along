const $burger = document.querySelector(".burger")
const $navLinkContainer = document.querySelector(".nav-link-container")
const $navLinks = document.querySelectorAll(".nav-link-container li");


$burger.onClick = () => {
    $navLinkContainer.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");



    $navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index/5 +0.5}s`;

        }
    });

};