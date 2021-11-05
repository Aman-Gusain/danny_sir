const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

scroll.on('scroll', (position) => {
  if (position.scroll.y > 50) {
    $('nav').css('background', 'black');
  } else {
    $('nav').css('background', 'transparent');
  }
});
