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
      start: 'top 90%',
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
    duration: 3,
    text: "Thank you for visiting our website !",
    ease: "none",
  });