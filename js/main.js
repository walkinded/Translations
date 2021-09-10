$(document).ready(function() {
  
  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.bottom-header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 86) {
        if (window.matchMedia('(min-width: 1100px)').matches) {
          $('.bottom-header').addClass('active');
          $('.page').addClass('scroll');
          $('.bottom-header__menu-list').addClass('active');
        }
      } else if (scrolled < 86) {
        $('.bottom-header').removeClass('active');
        $('.page').removeClass('scroll');
        $('.bottom-header__menu-list').removeClass('active');
      }
  });

  //menuHamburger
  $('.menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.bottom-header').toggleClass('_active');
    $('body').toggleClass('_no-scroll');
    $('.top-btn').toggleClass('_disabled');
  })

  $('.bottom-header__navigation-list li a').on('click', function() {
    $('.menu-toggle').removeClass('open');
    $('.bottom-header').removeClass('_active');
    $('body').removeClass('_no-scroll');
    $('.top-btn').removeClass('_disabled');
  });
  
  //Выпадания
  $('.top-footer__title').on('click', function() {
    $(this).toggleClass('_active'),
    $(this).next().slideToggle('slow');
  });

  //FancyBox
  $('.fancybox').fancybox();

  //Кнопка вверх
  var button = $('.top-btn');	
    $(window).scroll (function () {
      if ($(this).scrollTop () > 600) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });	 
    button.on('click', function() {
    $('body, html').animate({
    scrollTop: 0
    }, 800);
    return false;
  });		 

  //ТАБЫ
  $('.tab').on('click', function(e) { 
    e.preventDefault();
  
    $($(this).siblings()).removeClass('tab_active'); 
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content_active');
  
    $(this).addClass('tab_active'); 
    $($(this).attr('href')).addClass('tabs-content_active');
  
    if (window.matchMedia('(max-width: 820px)').matches) { // аналог media-queries
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 55 +'px'});
    }
  });

  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  //Слайдер
  $('.feedback-page__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: false,
    fade: true,
    appendArrows:'.feedback-page__information',
    prevArrow: '<button class="feedback-page__slider-btn feedback-page__slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="feedback-page__slider-btn feedback-page__slider-btnnext"><img src="img/arrow-right.png" alt=""></button>',
  });

  //Скроллбар
  $(window).on("load",function() {
    $(".feedback-page__slider-box article, textarea").mCustomScrollbar({
      theme: "dark"
    });
  });

  // Аккордеон
  $('.questions-page__item-title, .questions-page__item-btn').on('click', function() {
    $('.questions-page__item').removeClass('_active'); 
    $(this).parents().addClass('_active'); 
  });

/* Плавный скролл к якорю */
  $(function(){ $('.bottom-header__navigation-list li a[href^="#"], .top-footer__navigation-list li a[href^="#"]').click(function(){
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(_href).offset().top - 50 +'px'}); return false; });
  });

});

/* ========== NEW JS ==========*/ 
const articleMainImg = document.querySelector('.page-article__item img');


window.addEventListener('scroll', function(){
  let value = window.scrollY;

  articleMainImg.style.top = value * -0.2 + 'px';
});
