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

const parallax = document.getElementById("panel1");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

document.addEventListener("scroll", function () {
  const panel1 = this.getElementById("panel1");

  const scrollY1 = window.scrollY;

  const panelT1 = panel1.offsetTop;

  if (scrollY1 >= panelT1) {
    panel1.style.position = "sticky";
    panel1.style.top = "0";
  }
});
document.addEventListener("scroll", function () {
  const panel1 = this.getElementById("panel2");

  const scrollY1 = window.scrollY;
  const panelT = panel1.offsetTop;

  if (scrollY1 >= panelT) {
    panel1.style.position = "sticky";
    panel1.style.top = "0";
  }
});
document.addEventListener("scroll", function () {
  const panel1 = this.getElementById("panel3");

  const scrollY1 = window.scrollY;
  const panelT = panel1.offsetTop;

  if (scrollY1 >= panelT) {
    panel1.style.position = "sticky";
    panel1.style.top = "0";
  }
});

function transformDiv(translateValue, buttonId) {
  // Update the transform property of the contentDiv
  const contentDiv = document.getElementById("contentDiv");
  contentDiv.style.transform = `translate3d(0px, ${translateValue}px, 0px)`;

  // Get all buttons and iterate over them
  const buttons = document.querySelectorAll(".flex-col button");
  buttons.forEach((button) => {
    const h4 = button.querySelector("h4");
    if (button.id === buttonId) {
      h4.classList.remove("text-gray-650", "font-normal");
      h4.classList.add("text-gray-800", "font-semibold");
    } else {
      h4.classList.remove("text-gray-800", "font-semibold");
      h4.classList.add("text-gray-650", "font-normal");
    }
  });
}
