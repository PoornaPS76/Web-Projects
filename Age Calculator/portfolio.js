const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        console.log('Toggle clicked');
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        console.log('Close clicked');
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    console.log('Link clicked');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};


/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============Email JS ====================*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_nf6mp42', 'template_vg3obbm', '#contact-form', 'FI-4edjQJwwp-uItI')
        .then(() => {

            //show sent message
            contactMessage.textContent = 'Message sent successfully  ✅'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear input fields
            contactForm.reset()
        }, () => {
            //show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'

        })


}

contactForm.addEventListener('submit', sendEmail)

/*=========== show scroll up ============*/
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up');

    if (this.scrollY >= 350) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

/*=====scroll sections active link======*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=========Dark Theme============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=======scroll reveal animation=========*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__perfil, .about__image, .contact__mail', { origin: 'right' });
sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data', { origin: 'left' });
sr.reveal('.services__card, .projects__card', { interval: 100 });

/*===========popup window ==========*/

const popupButtonElements = document.querySelectorAll('.projects__button');
const videoPopup = document.getElementById('videoPopup');
const videoFrame = document.getElementById('videoFrame');

popupButtonElements.forEach((popupButtonElement) => {
    popupButtonElement.addEventListener('click', (event) => {
        event.preventDefault();

        const videoId = popupButtonElement.getAttribute('data-video-id');
        videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        videoPopup.style.display = 'flex';
    });
});

videoPopup.addEventListener('click', () => {
    videoPopup.style.display = 'none';
    videoFrame.src = '';
});

