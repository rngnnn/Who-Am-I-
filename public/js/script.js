




    const navToggle = document.querySelector('.nav_toggle');
    const navMenu = document.querySelector('.nav_menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show_menu');
        navToggle.classList.toggle('active'); 

    });

    // HIDE NAVBAR ON SCROLL

    const header = document.querySelector('.header');
    const homeSection = document.querySelector('.home');
    
    window.addEventListener('scroll', () => {
        const homeHeight = homeSection.offsetHeight;
    
        if (window.scrollY > homeHeight) {
            header.style.backgroundColor = 'rgba(28, 35, 33, 0.4)'; 
        } else {
            header.style.backgroundColor = '#1C2321'; 
        }
    });

    
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show_menu')) {
            navMenu.classList.remove('show_menu');
            navToggle.classList.remove('active');
        }
    });
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
                responseElement.style.color = 'white';
                responseElement.style.fontWeight = 'bold'; 
                responseElement.style.fontSize = '18px'; 


                form.reset();
            } else {
                responseElement.textContent = result.error;
                responseElement.style.color = 'red';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });