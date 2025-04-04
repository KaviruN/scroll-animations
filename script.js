// Remove the IntersectionObserver...
// ...existing code...
// Add a ScrollTrigger-based approach:
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

document.querySelectorAll('.hidden').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            markers: false,
            scrub: 2,
            //   start: 'top 90%',
            //   end: 'bottom 20%',
            toggleActions: "restart pause none restart",
            toggleClass: "show"
        }
    });
});


gsap.to('.thank', {
    scrollTrigger: {
        trigger: '.thank',
        toggleActions: "restart pause none restart",
    },
    duration: 2,
    text: "Thank you for visiting our website !",
    ease: "none",
});

gsap.to('.welcome', {
    duration: 3,
    start: 'center center',
    end: 'bottom 80%',
    text: "Welcome Kaviru",
    ease: "none",
});