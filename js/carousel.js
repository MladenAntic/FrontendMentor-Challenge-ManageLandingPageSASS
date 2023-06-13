const dots = document.querySelectorAll(".dot");

$("#testimonials .wrapper").owlCarousel({
  autoplay: true,
  slideSpeed: 1000,
  items: 3,
  loop: true,
  nav: false,
  navText: false,
  margin: 30,
  dots: false,
  responsive: {
    280: {
      items: 1,
    },
    767: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});