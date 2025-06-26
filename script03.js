const items = document.querySelectorAll(".x_g--serv_slider-02_item");

items.forEach((item, hoveredIndex) => {
  item.addEventListener("mouseenter", () => {
    items.forEach((el, i) => {
      if (i < hoveredIndex) {
        el.style.transform = "translateX(-4rem)";
      } else if (i > hoveredIndex) {
        el.style.transform = "translateX(4rem)";
      } else {
        el.style.transform = "translateX(0)"; // hovered элемент остаётся на месте
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    items.forEach((el) => {
      el.style.transform = "";
    });
  });
});
