const section1swiper = new Swiper('.section1 .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const section2swiper = new Swiper('.section4>.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  effect:"coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect:{
    rotate: 50,
    stretch:0,
    depth:100,
    modifier:1,
    slideShadow: true,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiper1 = new Swiper('.bread-box .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.cake-box .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper3 = new Swiper('.sandwich-box .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function(){
  $(".section3 .taps>li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});

const storySwiper = new Swiper('.section3 .swiper', {  
});

$(".btn1").on("click", function(){
  storySwiper.slideTo(0, "1.2s", false);
})

$(".btn2").on("click", function(){
  storySwiper.slideTo(1, "1.2s", false);
})

$(".btn3").on("click", function(){
  storySwiper.slideTo(2, "1.2s", false);
})