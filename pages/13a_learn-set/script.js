import gsap from "gsap";

gsap.set('.gsap-box', {opacity:0, scale:0.5, y: 100})

gsap.to('.gsap-box', {
    opacity:1, 
    scale:1, 
    y: 0,
    duration: 4,
    ease: 'expo.out'
})