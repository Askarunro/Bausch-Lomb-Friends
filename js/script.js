$(document).ready(function () {
  $('.slider-spend').slick({
    arrows: true,
    dots: true,
    speed: 200,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    infinite: false,
  });
});

$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    speed: 200,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    infinite: false,
  });
});
