/* script para el slider de la home - banner Home */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* script para el slider de la home - Productos relacionados */
$(document).ready(function(){
    /*$('#grid-slick__grid').slick({
      speed: 300,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:true
      });*/
  });