/*=============== SHOW MENU */
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

// ================== Menu show 
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// menu hidden 
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', LinkAction))
/*=============== SWIPER PROJECTS */


/*=============== SWIPER TESTIMONIAL */
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== EMAIL JS */

// const contactForm = document.getElementById('contact-form'),
//       contactName = document.getElementById('contact-name'),
//       contactEmail = document.getElementById('contact-email'),
//       contactProject = document.getElementById('contact-project'),
//       contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) =>{
//   e.preventDefault()
//       // check if field has value
//     if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
//       contactMessage.classList.remove('color-blue')
//       contactMessage.classList.add('color-red')
//           // show message
//       contactMessage.textContent = 'Write all input field 📩'
//     }
//     else{
//       // seriveId - templetid form -public key
//       emailjs.sendForm('service_1odhthi','template_w069y1n','#contact-form','hqLtcaH4UF9ALSFxl')
//       .then(() =>{
//         // show msg and color
//         contactMessage.classList.add('color-blue')
//         contactMessage.textContent = 'Message send ✅'

//         // set timer 
//         setTimeout(() =>{
//           contactMessage.textContent = ''
//         }, 5000)
//       }, (error) =>{
//         alert('SOMETHING WENT WRONG', error)
//       })
//       contactName.value = ''
//       contactEmail.value = ''
//       contactProject.value = ''
//     }
// }
// contactForm.addEventListener('submit' , sendEmail)
      

/*=============== SCROLL SECTIONS ACTIVE LINK */

// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//   const scrollY = window.pageYOffset
//     sections.forEach(current => {
//       const sectionHeight = current.off
//     })
// }

/*=============== SHOW SCROLL UP */ 

  const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')
  }

  window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME */ 


/*=============== CHANGE BACKGROUND HEADER */
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')

}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION */

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__data, .projects__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'right'})
sr.reveal(`.skills__content:nth-child(2),  .contact__content:nth-child(2)`, { origin: 'left'})
sr.reveal(`.qualification__content`, { interval: 100})
