


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



    // SCROLL TO TOP BUTTON

    document.getElementById('contactForm').addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };
    
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
            const responseElement = document.getElementById('formResponse');
            if (response.ok) {
                responseElement.textContent = result.message;
                responseElement.style.color = 'green';
                form.reset();
            } else {
                responseElement.textContent = result.error;
                responseElement.style.color = 'red';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });