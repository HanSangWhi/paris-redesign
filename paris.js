// 섹션1

const section1swiper = new Swiper('.section1>.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  observer : true,
  observeParents : true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 로그인, 회원가입 팝업 관련

function popup__init1(no){
  $('.btn-popup-' + no).click(function(){
    $('.popup-' + no).addClass('active');
  });
  $('.popup-' + no + ' .popup__btn-close, .popup-' + no).click(function(){
    $('.popup-' + no).removeClass('active');
  });
  $('.popup-' + no + ' .popup__content').click(function(){
    return false;
  });
}

popup__init1(1);
popup__init1(2);

// 팝업 관련

function popup__init2(no){
  $('.section1 .popup__btn-open .btn' + no).click(function(){
    $('.section1 .popup' + no).addClass('active');
  });
  $('.section1 .popup' + no + ' .popup__btn-close').click(function(){
    $('.section1 .popup' + no).removeClass('active');
  })
}
popup__init2(1);

// 사이드바 관련

// 사이드바 작동관련
function side_bar__init(){
  $('.top-bar .icon-1').click(function(){
    $('.side-bar').addClass('active');
    $('.side-bar__wrap').addClass('active');
  });
  $('.side-bar__close-btn').click(function(){
    $('.side-bar').removeClass("active");
    $('.side-bar__wrap').removeClass('active');
  });
}
side_bar__init();

// ul,li 관련
function side_bar_ul__init(){
  $('.side-bar>ul>li').click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass('active');
    }else{
      $('.side-bar>ul>li').removeClass("active");
      $(this).addClass("active");
    }
  })
}
side_bar_ul__init();
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


