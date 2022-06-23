const navToggle =  document.querySelector('.nav-toggle')
//find all nav links
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
});

//if a link from navLinks is clicked on the nav-open class will then close.
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})