document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        smartphone: {
            smooth: true,
        },
        tablet: {
            smooth: true,
        },
    });


    window.addEventListener('load', function () {
        scroll.update();
    });
});


