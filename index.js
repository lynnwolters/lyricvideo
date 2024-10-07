
const words = document.querySelectorAll("main section:nth-of-type(1) h1 span");
const tl = gsap.timeline({ repeat: -1, yoyo: true }); 

const times = [1.4, 1.6, 2.5, 2.8, 3, 3.2, 3.5, 3.8]; 

words.forEach((word, index) => {
    tl.from(word, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        ease: "power1.out",
    }, times[index]); 
});

const items = document.querySelectorAll("main section:nth-of-type(2) div img");

gsap.to(items, {
    scaleY: 3, 
    stagger: 0.1, 
    duration: .3, 
    ease: "power1.inOut", 
    repeat: -1, 
    yoyo: true, 
});


