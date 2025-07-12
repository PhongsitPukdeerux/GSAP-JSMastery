gsap.to(".card", {
    opacity:1,
    scale: 1,
    duration: 1,
    onComplete: () => {
        gsap.to(".card", {
            y:-30,
            repeat: -1,
            yoyo: true,
            duration: 0.5
        });

        gsap.to(".card",{
            boxShadow: "0px 20px 50px rgba(29, 209, 161, 0.6)",
            repeat: -1,
            duration:1,
            yoyo: true,
        })
    }
})