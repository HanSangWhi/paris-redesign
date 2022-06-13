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

$(document).ready(function(){
  $(".section2 .btn1").click(function(){
    $(".section2 .txt-box1").toggleClass("active");
    if($(".section2 .txt-box1").hasClass("active")){
      $(".magazine-cover1").removeClass("active");
    } else {
      $(".section2 .txt-box1").removeClass("active");
      $('.magazine-cover1').addClass("active");
    }
  });
});


$(document).ready(function(){
  $(".section2 .btn2").click(function(){
    $(".section2 .txt-box2").toggleClass("active");
    if($(".section2 .txt-box2").hasClass("active")){
      $(".magazine-cover2").removeClass("active");
    } else {
      $(".section2 .txt-box2").removeClass("active");
      $(".magazine-cover2").addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".section2 .btn3").click(function(){
    $(".section2 .txt-box3").toggleClass("active");
    if($(".section2 .txt-box3").hasClass("active")){
      $(".magazine-cover3").removeClass("active");
    } else {
      $(".section2 .txt-box3").removeClass("active");
      $(".magazine-cover3").addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".section2 .btn4").click(function(){
    $(".section2 .txt-box4").toggleClass("active");
    if($(".section2 .txt-box4").hasClass("active")){
      $(".magazine-cover4").removeClass("active");
    } else {
      $(".section2 .txt-box4").removeClass("active");
      $(".magazine-cover4").addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".section2 .btn5").click(function(){
    $(".section2 .txt-box5").toggleClass("active");
    if($(".section2 .txt-box5").hasClass("active")){
      $(".magazine-cover5").removeClass("active");
    } else {
      $(".section2 .txt-box5").removeClass("active");
      $(".magazine-cover5").addClass("active");
    }
  });
});
