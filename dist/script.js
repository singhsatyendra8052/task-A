function toggleDivs1() {
  const showDiv = document.getElementById("div2");
  const hideDiv = document.getElementById("div1");

  showDiv.classList.remove("hidden");
  hideDiv.classList.add("hidden");
}
function toggleDivs2() {
  const showDiv = document.getElementById("div1");
  const hideDiv = document.getElementById("div2");

  showDiv.classList.remove("hidden");
  hideDiv.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const slide = document.querySelector(".carousel-slide");
  const slides = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let counter = 0;
  const size = slides[0].clientWidth;

  slide.style.transform = "translateX(" + -size * counter + "px)";

  nextButton.addEventListener("click", () => {
    if (counter >= slides.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  });

  prevButton.addEventListener("click", () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const section = document.getElementById("parallax-section");
//   const items = section.querySelectorAll(".parallax-item");

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function applyParallaxEffect() {
//     items.forEach((item, index) => {
//       if (isElementInViewport(section)) {
//         setTimeout(() => {
//           item.style.transform = "translateY(0)";
//           item.style.opacity = "1";
//         }, index * 300); // delay each item by 300ms
//       }
//     });
//   }

//   window.addEventListener("scroll", applyParallaxEffect);
//   applyParallaxEffect(); // initial check in case section is already in view
// });

const parallax = document.getElementById("panel1");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
