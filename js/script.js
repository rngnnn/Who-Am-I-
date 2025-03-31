


const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active");
    })
