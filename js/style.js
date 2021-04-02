/*---------------------------------
  PC画面のサイドバーのアコーディオンメニュー
---------------------------------*/
var btn = document.getElementsByClassName("btn");
var i;
for(i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function(){
    var panel = this.nextElementSibling;
    if(panel.style.display == "block") {
      $(panel).slideUp(300);
    }else {
      $(panel).slideDown(300);
    }
  })
}

// $(function(){
// 	$('.toggle_title').click(function(){
// 		$(this).toggleClass('selected');
// 		$(this).next().slideToggle();
// 	});
// });

// $(function(){
//   $('.single-item').slick({
//     // accessibility: true,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     dots: true,
//     // fade: true,
//     slidesToShow:4,
//     slidesToScroll:4
//   });
// });

// $(function(){
// 	$('.toggle_title').click(function(){
// 		$(this).toggleClass('selected');
// 		$(this).next().slideToggle();
// 	});
// });

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
$(function() {
  $('.side-bar-btn').click(function() {
    var category = $(this).hasClass('category-btn');
    var price = $(this).hasClass('price-btn');
    var size = $(this).hasClass('size-btn');
    var color = $(this).hasClass('color-btn');
    var others = $(this).hasClass('others-btn');

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
  });
});
