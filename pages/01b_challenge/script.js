//? You’ve given a simple HTML layout,
{/* <div class="circle"></div> */}
{/* <div id="square"></div> */}
{/* <div class="triangle"></div> */}
//? Target all three shapes at once
// Use a single GSAP call that selects a circle, square, and triangle together.
gsap.to("div",{})
//? Target each shape individually
gsap.to(".circle",{})
gsap.to("#square",{})
gsap.to(".triangle",{})
// Write separate GSAP calls for circle, square, and triangle.
//? Target nested elements
// Select .title and .description only when they are inside .card. (e.g., .card .title)
gsap.to(".content",{
    y: -30,
    duration: 1,
    repeat: -1,
    yoyo: true,
})


