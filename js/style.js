/*---------------------------------
  PC画面のサイドバーのアコーディオンメニュー
---------------------------------*/
$(function() {
  $('.side-bar-btn').click(function()  {
    var category = $(this).hasClass('category-btn');
    var price = $(this).hasClass('price-btn');
    var size = $(this).hasClass('size-btn');
    var color = $(this).hasClass('color-btn');
    var others = $(this).hasClass('others-btn');
    var footer = $(this).hasClass('footer-btn');
    if(category){
      $('.category-btn').nextAll('.category-panel').slideToggle();
    }
    else if(price){
      $('.price-btn').nextAll('.price-panel').slideToggle();
    }
    else if(size){
      $('.size-btn').nextAll('.size-panel').slideToggle();
    }
    else if(color){
      $('.color-btn').nextAll('.color-panel').slideToggle();
    }
    else if(others){
      $('.others-btn').nextAll('.others-panel').slideToggle();
    }
    else if(footer){
      $('.footer-btn').nextAll('.footer-panel').slideToggle();
    }
  });
});

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

$(function(){
  $('.single-item').slick({
    // accessibility: true,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: true,
    // fade: true,
    slidesToShow:4,
    slidesToScroll:4,
    arrows: true,

    responsive: [{
      breakpoint: 480,  //ブレイクポイントを指定
      settings: {
        slidesToShow:2.5,
        slidesToScroll:2.5,
        dots: false,
        arrows: false,
      }
    }]

  });
});

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

var $slider_container = $('.container'),
    $slider = $('.single-item');

$slider.slick({
  appendArrows: $slider_container,
  // FontAwesomeのクラスを追加
  prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
  nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
});

/*---------------------------------
  モバイル画面のヘッダーのハンバーガーメニュー
---------------------------------*/
$(function() {
  $('.hamburger').click(function() {
      $(this).addClass('active');
      
      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      }
       else {
          $('.globalMenuSp').removeClass('active');
      }

      $(this).addClass('hide-btn');
      $('.hamburger2').addClass('show-btn');
  });
});
$(function() {
  $('.hamburger2').click(function() {
      $(this).removeClass('active');
      
      if 
      ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } 
      else
       {
          $('.globalMenuSp').removeClass('active');
      }

      $(this).removeClass('show-btn');
      $('.hamburger').removeClass('hide-btn');
  });
});

/*---------------------------------
  PC画面のサイドバー「＋」「―」のボタン切り替え
---------------------------------*/
/*---------------------------------
  モバイル画面のフッター「↑」「↓」のボタン切り替え
---------------------------------*/

$(function() {
  $('.side-bar-btn').click(function() {
    var category = $(this).hasClass('category-btn');
    var price = $(this).hasClass('price-btn');
    var size = $(this).hasClass('size-btn');
    var color = $(this).hasClass('color-btn');
    var others = $(this).hasClass('others-btn');
    var footer = $(this).hasClass('footer-btn');

    if(category) {
      $(".category-btn").find('.fa-plus').toggleClass('hide-btn');
      $(".category-btn").find('.fa-minus').toggleClass('show-btn');
    }
    else if(price) {
      $(".price-btn").find('.fa-plus').toggleClass('hide-btn');
      $(".price-btn").find('.fa-minus').toggleClass('show-btn');
    }
    else if(size) {
      $(".size-btn").find('.fa-plus').toggleClass('hide-btn');
      $(".size-btn").find('.fa-minus').toggleClass('show-btn');
    }
    else if(color) {
      $(".color-btn").find('.fa-plus').toggleClass('hide-btn');
      $(".color-btn").find('.fa-minus').toggleClass('show-btn');
    }
    else if(others) {
      $(".others-btn").find('.fa-plus').toggleClass('hide-btn');
      $(".others-btn").find('.fa-minus').toggleClass('show-btn');
    }
    else if(footer) {
      $(".footer-btn").find('.fa-chevron-down').toggleClass('hide-btn');
      $(".footer-btn").find('.fa-chevron-up').toggleClass('show-btn');
    }
  });
});

/*---------------------------------
  モバイル画面のトップスクロール
---------------------------------*/
$(function() {
  var topBtn = $('#page-top');
  // 元々は見えないようにしておく
  topBtn.hide();

  // スクロールしたらボタンを表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });

  // スクロールでトップへ戻る
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 300);
      return false;
  });
});

/*---------------------------------
  モバイル画面のメニュー
---------------------------------*/
$(function() {
  $('.menu-item-display').click(function() {
    $(this).nextAll().toggleClass('show');
  });
});
$(function() {
  $('.menu-item-sorting-btn').click(function() {
    $('.sorting-menu').toggleClass('show');
  });
});
