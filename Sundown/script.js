window.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#Main'),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });

  const fadeElements = document.querySelectorAll('[data-scroll-call="fade"]');

  fadeElements.forEach((element) => {
    element.addEventListener('call', (event) => {
      if (event.detail && event.detail.direction === 'enter') {
        element.classList.add('is-reveal');
      }
    });
  });
});
