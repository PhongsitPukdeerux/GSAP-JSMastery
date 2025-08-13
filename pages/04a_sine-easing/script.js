import gsap from "gsap";

const button = document.querySelector('.scroll-to-top');
let isFloat = false;

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        button.classList.add('show');
        if(!isFloat) {
            gsap.to(button, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.out'
            })
        }
        isFloat = true;
    }
    else{
        button.classList.remove('show');
    }
})

button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale: 1.2,
        duration: 0.5
    })
})

button.addEventListener('mouseleave', () => {
    gsap.to(button, {
        scale: 1.0,
        duration: 0.5
    })
})


button.addEventListener('click', () => {
    window.scrollTo(0,0)
})