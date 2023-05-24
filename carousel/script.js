document.getElementById("carousel");
let currentSlide = "1";
let myColors = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];

let currentCarousel = (carousel) => {
  carousel.addEventListener("mouseover", (event) => {
    console.log(event.target.id);
    currentSlide = event.target.id;
  });
};

let getColor = (colorPicker) => {
  colorPicker.addEventListener("change", (event) => {
    console.log(document.getElementsByClassName(currentSlide));
    document.getElementById(currentSlide).style.backgroundColor =
      event.target.value;
    myColors[currentSlide - 1] = event.target.value;
    console.log(myColors);

    const colorPaletteItems = document.querySelectorAll(".color-pallet");
    colorPaletteItems.forEach((item, index) => {
      console.log(item);
      item.style.backgroundColor = myColors[index];
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("color-sel");
  const carousel = document.getElementById("carousel");

  var slideCount = document.getElementById("carousel").children;
  console.log(slideCount);

  currentCarousel(carousel);
  getColor(colorPicker);
});

let moveRight = () => {
  const carousel = document.getElementById("carousel");
  const firstSlide = carousel.firstElementChild;
  carousel.style.transform = "translateX(-100%)";
  setTimeout(() => {
    carousel.appendChild(firstSlide);
    carousel.style.transform = "translateX(0)";
  }, 500);
};

let moveLeft = () => {
  const carousel = document.getElementById("carousel");
  const lastSlide = carousel.lastElementChild;
  carousel.style.transform = "translateX(-100%)";
  setTimeout(() => {
    carousel.insertBefore(lastSlide, carousel.firstElementChild);
    carousel.style.transform = "translateX(0)";
  }, 500);
};

const colors = document.getElementById("my-colors");

console.log(colors);
colors.addEventListener("mouseover", (event) => console.log(event.target.value))

console.log(colors);
