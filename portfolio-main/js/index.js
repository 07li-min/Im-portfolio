$(document).ready(function(){

  AOS.init({
    duration: 3000
  });
  
  $('.menu-btn').click(function(){
    $(this).toggleClass('active'); 
    $('.hd .mob-gnb').toggleClass('on'); 
    $('html, body').toggleClass('hide-scroll');
  });
  $('.dep1').click(function(){
    $('.menu-btn').removeClass('active'); 
    $('.hd .mob-gnb').removeClass('on'); 
    $('html, body').removeClass('hide-scroll');
  });

  let menu1 = '.accordion .menu1',
  menu1Tit = '.accordion .main-tit',
  menu2 = '.accordion .menu2';

  $('.menu1:first-child ').addClass('active');
  $(menu1Tit).on('click', function(e){
    e.preventDefault();
    $(this).closest(menu1).toggleClass('active').siblings().removeClass('active');
    $(this).closest(menu1).find(menu2).slideToggle();
    $(this).closest(menu1).siblings().find(menu1Tit).slideUp();
  });


  var portfolioswiper = new Swiper(".portfolio .content", {
    slidesPerView: 1,
    effect : 'fade',
    allowTouchMove: false,
    navigation: {
      nextEl: ".arrow .swiper-button-next",
      prevEl: ".arrow .swiper-button-prev",
    },
  });
  

  let modal = "";
  $('.btn1').on('click', function(){
    modal = $(this).data('modal');
    $('#' + modal).addClass('open');
  });
  
  $('.modal-hd button').on('click', function(){
    $(this).closest('.modal').removeClass('open');
  })
  


  $(window).scroll(function(){
    let kvAni = $('.kv'),
    contactAni = $('.contact'),
    kvPath = $('.kv .she-path'),
    contactPath = $('.cont-svg'),
    quick = $('.quick-btn');
    
    if($(this).scrollTop() <= kvAni.offset().top){
      kvPath.addClass('on');
    }else{
      kvPath.removeClass('on');
    }
    if($(this).scrollTop() > contactAni.offset().top - 70){
      contactPath.addClass('on');
    }else{
      contactPath.removeClass('on');
    }

    if($(this).scrollTop() > 500){
      quick.fadeIn();
    }else{
      quick.fadeOut();
    }

  });

  $('.hd .dep1 > a').click(function(e){
    goToHash(this, e);
  }); 
  
  function goToHash(val, e) {
    e.preventDefault();
    if(val.hash){
      var targetPos;
      targetPos =  $(val.hash).offset().top;
      $('body, html').animate({'scrollTop' : targetPos});
    }
  }


});