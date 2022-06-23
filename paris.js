// 섹션1

const section1swiper = new Swiper('.section1>.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop : true,

  // If we need pagination
  observer : true,
  observeParents : true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 섹션2

$(document).ready(function () {
  $(".section2 .btn1").click(function () {
    $(".section2 .txt-box1").toggleClass("active");
    if ($(".section2 .txt-box1").hasClass("active")) {
      $(".magazine-cover1").removeClass("active");
    } else {
      $(".section2 .txt-box1").removeClass("active");
      $('.magazine-cover1').addClass("active");
    }
  });
});


$(document).ready(function () {
  $(".section2 .btn2").click(function () {
    $(".section2 .txt-box2").toggleClass("active");
    if ($(".section2 .txt-box2").hasClass("active")) {
      $(".magazine-cover2").removeClass("active");
    } else {
      $(".section2 .txt-box2").removeClass("active");
      $(".magazine-cover2").addClass("active");
    }
  });
});

$(document).ready(function () {
  $(".section2 .btn3").click(function () {
    $(".section2 .txt-box3").toggleClass("active");
    if ($(".section2 .txt-box3").hasClass("active")) {
      $(".magazine-cover3").removeClass("active");
    } else {
      $(".section2 .txt-box3").removeClass("active");
      $(".magazine-cover3").addClass("active");
    }
  });
});

$(document).ready(function () {
  $(".section2 .btn4").click(function () {
    $(".section2 .txt-box4").toggleClass("active");
    if ($(".section2 .txt-box4").hasClass("active")) {
      $(".magazine-cover4").removeClass("active");
    } else {
      $(".section2 .txt-box4").removeClass("active");
      $(".magazine-cover4").addClass("active");
    }
  });
});

$(document).ready(function () {
  $(".section2 .btn5").click(function () {
    $(".section2 .txt-box5").toggleClass("active");
    if ($(".section2 .txt-box5").hasClass("active")) {
      $(".magazine-cover5").removeClass("active");
    } else {
      $(".section2 .txt-box5").removeClass("active");
      $(".magazine-cover5").addClass("active");
    }
  });
});

// 섹션3

$(document).ready(function () {
  $(".section3 .taps>li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});

const storySwiper = new Swiper('.section3 .pb-story__body .swiper', {
});

$(".btn1__1").on("click", function () {
  storySwiper.slideTo(0, "1.2s", false);
})

$(".btn1__2").on("click", function () {
  storySwiper.slideTo(1, "1.2s", false);
})

$(".btn1__3").on("click", function () {
  storySwiper.slideTo(2, "1.2s", false);
})

// 섹션4
const productswiper = new Swiper('.section4 .pb-products__body>.swiper', {
});

const swiper1 = new Swiper('.bread-box .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1023: {
      slidesPerView:2,
    },
  }
});

const swiper2 = new Swiper('.cake-box .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1023:{
      slidesPerView:2,
    },
  }
});

const swiper3 = new Swiper('.sandwich-box .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1023:{
      slidesPerView:2,
    }
  }
});

$(document).ready(function(){
  $(".section4 .taps>li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});

$(".btn2__1").on("click", function(){
  productswiper.slideTo(0, "1.2s", false);
});

$(".btn2__2").on("click", function(){
  productswiper.slideTo(1, "1.2s", false);
});

$(".btn2__3").on("click", function(){
  productswiper.slideTo(2, "1.2s", false);
});


