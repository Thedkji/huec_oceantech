function student() {
  let form = $(".student-container .fillter>div:nth-child(2)");
  let button = $(".student-container .fillter>div:nth-child(1) button");

  function showFillterStudent() {
    // Kiểm tra chiều cao hiện tại của form
    if (form.height() === 0) {
      form.css("height", "155px"); // Đặt chiều cao khi mở
      button.html(`
            <img src="./theme1/images/icon/sort-desc.png" alt="">
            <span>Ẩn tìm kiếm</span>
        `);
    } else {
      form.css("height", "0"); // Đặt chiều cao khi ẩn
      button.html(`
            <img src="./theme1/images/icon/sort-asc.png" alt="">
            <span>Tìm kiếm</span>
        `);
    }
  }

  // Gán sự kiện click cho nút
  $(button).click(() => {
    showFillterStudent();
  });

  let liContent = $(".student-container nav li");
  $(liContent).each((index, li) => {
    $(".student-container nav ul li:first-child").addClass("active");
    $(".calendar-content")
      .children(":not(:first-child)")
      .each(function () {
        $(this).addClass('d-none'); 
      });
      
    $(li).click(() => {
      let dataContent = $(li).find("a").attr("data-content"); // Lấy giá trị data-content của danh mục
      let showContent = $(".calendar-content").find(`.${dataContent}`); // Tìm phần tử có class trùng với data-content
      $(liContent).removeClass("active");

      $(li).addClass("active");

      // Ẩn tất cả các phần tử trong .calendar-content
      $(".calendar-content")
        .children()
        .each(function () {
          $(this).fadeOut(50); //mờ dần trong 50ms
          $(showContent).removeClass('d-none');
          
        });
        
        // Hiển thị phần tử có class trùng với data-content
        showContent.fadeIn(50); // hiện sau 50ms
    });
  });
}

export default student();
