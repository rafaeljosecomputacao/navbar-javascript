// Navbar toggle menu
function navbarToggle() {
    const $navbarItems = document.querySelectorAll(".navbar-items");

    $navbarItems.forEach(item => {
        if(item.classList.toggle("open")) {
            document.querySelector(".navbar-toggle-button").innerHTML = `<i class="bi bi-x-lg"></i>`;
        } else {
            document.querySelector('.navbar-toggle-button').innerHTML = `<i class="bi bi-three-dots-vertical"></i>`;
        }
    });
}

const $navbarToggleButton = document.querySelector(".navbar-toggle-button");
$navbarToggleButton.addEventListener("click", navbarToggle);