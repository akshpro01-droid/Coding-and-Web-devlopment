window.toggleContactCard = function (event) {
    if (event) {
        event.preventDefault();
    }

    const card = document.getElementById('contactCard');
    if (card) {
        card.classList.toggle('hidden');
    }
};

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", () => {
    const scrollToSection = (link) => {
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);
        if (!target) return;

        link.addEventListener("click", e => {
            e.preventDefault();
            lenis.scrollTo(target, {
                offset: -90,
                duration: 1.5
            });
        });
    };

    document.querySelectorAll(".nav-links a, a[href^='#']" ).forEach(scrollToSection);

    const logo = document.querySelector(".logo");
    if (logo) {
        logo.onclick = () => {
            lenis.scrollTo(0);
        };
    }

    window.toggleNav = function () {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        navbar.classList.toggle('open');
    };
});

gsap.from(".hero-title span", {
    y: 150,
    opacity: 0,
    stagger: 0.15,
    duration: 1.3,
    ease: "power4.out"
});

gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.8
});

gsap.from(".btn-primary", {
    scale: 0,
    rotation: 20,
    duration: 0.8,
    ease: "back.out(2)"
});

const transformSection = document.querySelector('.transform-section');
const floatItems = document.querySelectorAll('.float-item');

if (transformSection && floatItems.length) {
    transformSection.addEventListener('mousemove', (e) => {
        const rect = transformSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const pointerX = `${(x / rect.width) * 100}%`;
        const pointerY = `${(y / rect.height) * 100}%`;

        transformSection.style.setProperty('--pointer-x', pointerX);
        transformSection.style.setProperty('--pointer-y', pointerY);

        floatItems.forEach((item, index) => {
            const offsetX = ((x - rect.width / 2) / (rect.width / 2));
            const offsetY = ((y - rect.height / 2) / (rect.height / 2));
            const driftX = offsetX * (34 + index * 8);
            const driftY = offsetY * (28 + index * 6);

            gsap.to(item, {
                x: driftX,
                y: driftY,
                scale: 1.03,
                duration: 0.25,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });
    });

    transformSection.addEventListener('mouseleave', () => {
        transformSection.style.setProperty('--pointer-x', '50%');
        transformSection.style.setProperty('--pointer-y', '50%');

        gsap.to(floatItems, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: 'power2.out'
        });
    });
}

const split = new SplitType(".section-title", { types: "chars" });

gsap.from(split.chars, {
    opacity: 0,
    y: 100,
    rotateX: -90,
    stagger: 0.03,
    scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%"
    }
});

gsap.from(".project-card", {
    opacity: 0,
    y: 120,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".projects-section",
        start: "top 70%"
    }
});

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/12;
const rotateX=-(y-rect.height/2)/12;

gsap.to(card,{
rotationY:rotateY,
rotationX:rotateX,
transformPerspective:1000,
duration:.3
})

})

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
rotationX:0,
rotationY:0,
duration:.5
})

})

})

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{
x:e.clientX,
y:e.clientY,
duration:.15
})

})

document.querySelectorAll("button,a").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

gsap.to(btn,{
x:x*.3,
y:y*.3,
duration:.3
})

})

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{
x:0,
y:0,
duration:.4
})

})

})

gsap.to(".marquee-text",{

xPercent:-50,

ease:"none",

duration:20,

repeat:-1

})



gsap.to(".hero-content", {
    yPercent: -30,
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

const tl=gsap.timeline();

tl.to(".loader",{

y:"-100%",

duration:1.4,

ease:"power4.inOut"

})

.from(".hero-title span",{

y:120,

stagger:.08

},"-=.4")

