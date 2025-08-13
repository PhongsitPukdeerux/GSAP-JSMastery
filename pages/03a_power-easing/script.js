import gsap from "gsap";
//It’s good for a button that feels instant and responsive.
gsap.to(".btn", {
    y: -20,
    duration: 0.4,
    ease: "power4.out"
})

//It makes it feel like it gently enters the screen.
gsap.from(".toast", {
    x: -300,
    duration: 1.2,
    ease: "power2.out"
});

//It feels more polished and modern that way.
gsap.from(".card", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut"
  });