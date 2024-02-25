const swiper_background = new Swiper("#background", {
  direction: "vertical",

  // centerSlide
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,

  //loop
  loop: false,

  //nextSlide
  mousewheel: true,

  //slideSpeed
  speed: 1500,
});

const swiper = new Swiper("#page2_swiper", {
  // centerSlide
  slidesPerView: "1.1",
  centeredSlides: false,
  spaceBetween: 10,

  //loop
  loop: false,

  //nextSlide
  mousewheel: true,

  //slideSpeed
  speed: 1500,
});

window.addEventListener("scroll", function () {
  const image = document.getElementById("arrow");
  const scrollPosition = window.scrollY;
  const bottomOfPage = document.body.scrollHeight - window.innerHeight;

  if (scrollPosition >= bottomOfPage - 5) {
    image.style.transition = "visibility 0.1s";
    image.style.visibility = "hidden";
  } else {
    image.style.transition = "visibility 0.1s";
    image.style.visibility = "visible";
  }
});

// let idx = 0;
// let startY;
// let isScrolling = false;

// const select = document.querySelector(".background");
// const inner = select.querySelectorAll(".page1, .page2, .page3, .page4");

// $(window).on("touchstart", function (e) {
//   startY = e.originalEvent.touches[0].clientY;
// });

// $(window).on("touchmove", function (e) {
//   if (isScrolling) return; // 이미 스크롤 중이면 무시
//   isScrolling = true;

//   const scrollDistance = e.originalEvent.changedTouches[0].clientY - startY;

//   const htmlFontSize = parseFloat($("html").css("font-size"));
//   const remScrollDistance = scrollDistance / htmlFontSize;
//   const remInnerHeight = inner[idx].clientHeight / htmlFontSize;

//   if (remScrollDistance > remInnerHeight / 60) {
//     idx = Math.max(idx - 1, 0);
//   } else if (-remScrollDistance > remInnerHeight / 60) {
//     idx = Math.min(idx + 1, inner.length - 1);
//   } else {
//     idx = idx;
//   }

//   $("html,body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $(inner[idx]).offset().top, // 다음 페이지의 시작 위치로 스크롤
//       },
//       600,
//       function () {
//         isScrolling = false;
//       }
//     );

//   // 스크롤 감쇠
//   setTimeout(function () {
//     isScrolling = false;
//   }, 100);
// });

