


const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active");
    })


    // TYPING TEXT ANIMATION
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
