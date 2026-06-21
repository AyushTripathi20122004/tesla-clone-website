gsap.registerPlugin(ScrollTrigger);
// navbar animation start here
const navTl=gsap.timeline({defaults:{duration:0.4}});

navTl.from('.navbar',{
    y:20,
    opacity:0,
    filter:'blur(10px)',
    ease:"power2.in"
})
navTl.from('.footer',{
    y:20,
    opacity:0,
    filter:'blur(10px)',
    ease:"power2.in"
})

                    
// navbar animation end here

const secTl=gsap.timeline({defaults:{duration:0.6}})
//  section1 animation start here

secTl.from('.section1',{
    opacity:0,
    duration:0.8,
    filter:'blur(10px)',
    y:4,
    ease:"power2.in",
})
// section1 animation end here

// section2 animation start here

secTl.from('.section2',{
    opacity:0,
    filter:'blur(10px)',
    y:4,
    ease:"power2.in",
})


// section2 animation end here


gsap.from(".offer_card", {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
    stagger: 0.2,
    ease: "power2.in",
    scrollTrigger: {
        trigger: ".limited_offer_section",
        start: "top 80%",
        end: "bottom 20%",
        markers: false
    }
});


// video_section animation end here


gsap.from(".video_section", {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
    ease: "power2.in",
    scrollTrigger: {
        trigger: ".video_section",
        start: "top 80%",
        end: "bottom 20%",
        markers: false
    }
});

// discovery animation end here


gsap.from(".discovery", {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
    ease: "power2.in",
    scrollTrigger: {
        trigger: ".discovery",
        start: "top 80%",
        end: "bottom 20%",
        markers: false
    }
});

// section5 cards animation end here

gsap.from(".section5", {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
    ease: "power2.in",
    scrollTrigger: {
        trigger: ".section5",
        start: "top 80%",
        end: "bottom 20%",
        markers: false
    }
});


// discovery animation end here

gsap.from(".links_base", {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
    ease: "power2.in",
    stagger:0.2,
    scrollTrigger: {
        trigger: ".links_base",
        start: "top 100%",
        end: "bottom 20%",
        markers: false
    }
});
