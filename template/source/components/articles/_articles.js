(function () {
  var slide = '.articles__item',
    dots = '.articles__dots',
    arrows = '.articles__arrows';

  var articles = {
    init: function () {
      this.catchDOM();
      if(isElement(this.$el)){
        if (isSlick(this.$el)) {
          this.generateSlick()
        }
      }
    },
    catchDOM: function () {
      this.$el = $('.js-articles');
      this.$slider = this.$el.find('.articles__box');
    },
    generateSlick: function () {
      this.$slider.slick({
        slide: slide,
        infinite: true,
        dots: true,
        appendDots: dots,
        customPaging: function (slider, i) {
          return '<div class="articles__dot"></div>';
        },
        arrows: true,
        appendArrows: arrows,
        prevArrow: '<div class="articles__arrow -prev"><i class="material-icons">chevron_left</i></div>',
        nextArrow: '<div class="articles__arrow -next"><i class="material-icons">chevron_right</i></div>',
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 3000,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
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

  articles.init();
})();