function scientificResearch() {
  const swiper = new Swiper(".scientific-research .swiper-scientific", {
    direction: "horizontal", // Hướng chuyển động ngang
    loop: true, // Cho phép lặp lại vòng quay slider
    slidesPerView: 1, // Hiển thị 1 slide
    slidesPerGroup: 1, // Mỗi nhóm có 2 slide

    pagination: {
      el: ".swiper-pagination", // Chỉ định phần tử pagination
      clickable: true, // Cho phép click vào các dấu chấm pagination
    },

    navigation: {
      prevEl: ".swiper-button-prev", // Nút quay lại
      nextEl: ".swiper-button-next", // Nút tiến lên
    },

    scrollbar: {
      el: ".swiper-scrollbar", // Thanh cuộn nếu có
    },

    effect: "slide", // Hiệu ứng chuyển động giữa các slide

    autoplay: {
      delay: 5000, // Tự động chuyển slide sau mỗi 1 giây
      disableOnInteraction: false, // Cho phép chuyển slide khi người dùng chạm vào
      pauseOnMouseEnter: true, // Dừng tự động khi hover chuột vào
    },

    // Tắt tính năng vuốt qua
    simulateTouch: true, // Vô hiệu hóa hành động vuốt
  });

  const swiper2 = new Swiper(".scientific-research .news-box-item:last-child .news-box-content", {
    direction: "horizontal", // Hướng chuyển động ngang
    loop: true, // Cho phép lặp lại vòng quay slider
    slidesPerView: 1, // Hiển thị 1 slide
    slidesPerGroup: 1, // Mỗi nhóm có 2 slide

    navigation: {
      prevEl: ".scientific-research .news-box-item:last-child .swiper-button-prev", // Nút quay lại
      nextEl: ".scientific-research .news-box-item:last-child .swiper-button-next", // Nút tiến lên
    },

    effect: "slide", // Hiệu ứng chuyển động giữa các slide
    // Tắt tính năng vuốt qua
    simulateTouch: true, // Vô hiệu hóa hành động vuốt
  });

  const swiper3 = new Swiper(".scientific-research .video-box .swiper", {
    direction: "horizontal", // Hướng chuyển động ngang
    loop: true, // Cho phép lặp lại vòng quay slider
    slidesPerView: 4, // Hiển thị 1 slide
    slidesPerGroup: 1, // Mỗi nhóm có 2 slide
    spaceBetween:20,
    navigation: {
      prevEl: ".scientific-research .video-content .swiper-button-prev", // Nút quay lại
      nextEl: ".scientific-research .video-content .swiper-button-next", // Nút tiến lên
    },

    scrollbar: {
      el: ".swiper-scrollbar", // Thanh cuộn nếu có
    },
    breakpoints:{
      175:{
        slidesPerView: 1,
      },
      775:{
        slidesPerView: 4,
      }
    },

    effect: "slide", // Hiệu ứng chuyển động giữa các slide
    // Tắt tính năng vuốt qua
    simulateTouch: true, // Vô hiệu hóa hành động vuốt
  });

  const swiper4 = new Swiper(".scientific-research .partner .swiper", {
    direction: "horizontal", // Hướng chuyển động ngang
    loop: true, // Cho phép lặp lại vòng quay slider
    slidesPerView: 8, // Hiển thị 1 slide
    slidesPerGroup: 1, // Mỗi nhóm có 2 slide
    // navigation: {
    //   prevEl: ".scientific-research .video-content .swiper-button-prev", // Nút quay lại
    //   nextEl: ".scientific-research .video-content .swiper-button-next", // Nút tiến lên
    // },

    scrollbar: {
      el: ".swiper-scrollbar", // Thanh cuộn nếu có
    },

    breakpoints: {
      175: {
        slidesPerView: 3,
      },
      775: {
        slidesPerView: 3,
      },
      1172: {
        slidesPerView: 8,
      }
    },
    autoplay: {
      delay: 4000, // Tự động chuyển slide sau mỗi 1 giây
      disableOnInteraction: true, // Cho phép chuyển slide khi người dùng chạm vào
      pauseOnMouseEnter: false, // Dừng tự động khi hover chuột vào
    },
  
    effect: "slide", // Hiệu ứng chuyển động giữa các slide
    // Tắt tính năng vuốt qua
    simulateTouch: true, // Vô hiệu hóa hành động vuốt
  });
}

export default scientificResearch();
