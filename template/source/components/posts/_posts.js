(function () {
  var slide = '.posts__item',
    dots = '.posts__dots',
    arrows = '.posts__arrows';

  var posts = {
    init: function () {
      this.catchDOM();
      if (isElement(this.$el)) {
        if (isSlick(this.$el)) {
          this.generateSlick()
        }
      }
    },
    catchDOM: function () {
      this.$el = $('.js-posts');
      this.$slider = $('.posts__box');
    },
    generateSlick: function () {
      this.$slider.slick({
        slide: slide,
        infinite: true,
        dots: true,
        appendDots: dots,
        customPaging: function (slider, i) {
          return '<div class="posts__dot"></div>';
        },
        arrows: true,
        appendArrows: arrows,
        prevArrow: '<div class="posts__arrow -prev"><i class="material-icons">chevron_left</i></div>',
        nextArrow: '<div class="posts__arrow -next"><i class="material-icons">chevron_right</i></div>',
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 3000,
        responsive: [
          {
            breakpoint: 969,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
  };

  function isElement(item) {
    return item.length > 0
  }

  function isSlick(item) {
    return item.hasClass('-slick')
  }

  posts.init();
})();