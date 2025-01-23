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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $("#banner-home-container").on(
    "afterChange",
    function (event, slick, currentSlide) {
      const textBanner = $("#banner-home-container .text-banner-content");

      // Reset animation bằng cách loại bỏ và thêm lại giá trị animation
      textBanner.css("animation", "none"); // Gỡ animation
      setTimeout(function () {
        textBanner.css(
          "animation",
          "fade-down-text-banner 0.7s linear forwards"
        );
      }, 50); // Delay cực nhỏ để browser có thời gian xử lý
    }
  );

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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });

  let btnNews = $(
    "#container-nuce-news > div > div > div.col-lg-3.nuce-new-item.ps-4 > div.d-flex > h3:nth-child(1)"
  );
  let btnEvent = $(
    "#container-nuce-news > div > div > div.col-lg-3.nuce-new-item.ps-4 > div.d-flex > h3:nth-child(2)"
  );

  let postNews = $(".nuce-new-item").find(".post-news");
  console.log("🚀 ~ home ~ postNews:", postNews);
  let postEvent = $(".nuce-new-item").find(".post-event");

  $(btnNews).css("cursor", "pointer");
  $(btnNews).addClass("btn-home-active");

  $(btnEvent).css("cursor", "pointer");
  $(btnEvent).css("alignContent", "center");

  $(btnNews).click(function () {
    $(postNews).removeClass("d-none");
    $(postEvent).addClass("d-none");
    $(btnNews).addClass("btn-home-active");
    $(btnEvent).removeClass("btn-home-active");
  });

  $(btnEvent).click(function () {
    $(postEvent).removeClass("d-none");
    $(postNews).addClass("d-none");
    $(btnEvent).addClass("btn-home-active");
    $(btnNews).removeClass("btn-home-active");
  });
}

export default home();
