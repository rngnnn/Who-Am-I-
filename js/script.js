


// const navToggle = document.querySelector(".nav_toggle"),
//       navMenu = document.querySelector(".nav_menu");


//     // navToggle.addEventListener("click", () => {
//     //     navMenu.classList.toggle("show-menu");
//     //     navToggle.classList.toggle("active");
//     // })




    const navToggle = document.querySelector('.nav_toggle');
    const navMenu = document.querySelector('.nav_menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show_menu');
        navToggle.classList.toggle('active'); 

    });

    // TYPING TEXT ANIMATION
    var typed = new Typed(".profession_text", {
        strings: ["Web Developer...", "Designer...", "Freelancer...","Coder..."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
