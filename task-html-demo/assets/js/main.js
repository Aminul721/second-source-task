(function ($) {
  "use strict";

  // FAQ js 
  if($('.section-faq-item').length) {
    $('.section-faq-title').each(function(index){
      let selfTitle = $(this);
      let selfParent =  selfTitle.parent();
      $(selfTitle).on("click",function(){
        if(!$(selfParent).hasClass('active')) {
          $(selfParent).siblings().removeClass('active');
          $(selfParent).addClass('active');
          $(selfParent).siblings().find('.section-faq-content').slideUp(300);
          $(selfParent).find('.section-faq-content').slideDown(300);
        }else {
          $(selfParent).removeClass('active');
          $(selfParent).find('.section-faq-content').slideUp(300);
        }
      });
      if (index === 0) {
        $(selfParent).find('.section-faq-content').slideDown(300);
        $(selfParent).addClass('active');
      }
    });
  }
  
  // Set background color of each color-box using data-color attribute
  $(".color-box").each(function () {
    var color = $(this).data("color");
    $(this).css("background-color", color);
  });

  $(window).on("resize", function () {});
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  // swiper slider js
  function swiperSlider() {
    const swiperItems = document.querySelectorAll(".atoley-swiper-slider");
    swiperItems.forEach(function (swiperElm) {
      if (!swiperElm.dataset.swiperInitialized) {
        const swiperOptions = JSON.parse(swiperElm.dataset.swiperOptions);
        // Add additional callbacks here
        swiperOptions.on = {
          slideChange: function () {
            // updateClasses(this);
          }
        };
        let SwiperSlider = new Swiper(swiperElm, swiperOptions);
        swiperElm.dataset.swiperInitialized = true;
      }
    });
  }
  swiperSlider();

  // =============  Dynamic Year =====
  if ($('.dynamic-year').length > 0) {
    const yearElement = document.querySelector('.dynamic-year');
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = currentYear;
  }
});
