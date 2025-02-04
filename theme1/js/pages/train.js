function train() {
  let trainLi = $(".menu-train-left .menu .submenu>li");

  $(trainLi).each((index, li) => {
    $(li).click((e) => {
      e.preventDefault();
      $(trainLi).removeClass("active");
      $(li).addClass("active");
    });
  });
}

export default train();
