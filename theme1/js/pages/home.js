function home() {
  $("#banner-home-container").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./theme1/images/icon/left-arrow-block-2.svg" style="width:40px;height:40px"</button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./theme1/images/icon/right-arrow-block-2.svg" style="width:40px;height:40px"</button>',
  });

  $("#home-hot-title-section>div").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./theme1/images/icon/left-arrow-block-2.svg" style="width:40px;height:40px"</button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./theme1/images/icon/right-arrow-block-2.svg" style="width:40px;height:40px"</button>',
  });

  $(".slick-ads").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="icon-chervon-left "></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="icon-chervon-right "></i></button>',
  });
}

export default home();
