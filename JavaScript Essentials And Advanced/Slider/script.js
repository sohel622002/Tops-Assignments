let slideAt = 0;
const slides = document.querySelectorAll(".slides");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const sliderContainer = document.querySelector(".slider-container");

function resizeSlides() {
  slides.forEach((slide) => {
    const scaler = slide.getAttribute("data-scale");
    slide.style.scale = scaler;
  });
}

window.addEventListener("load", resizeSlides);

rightButton.addEventListener("click", () => {
  if (slideAt < slides.length - 1) {
    ++slideAt;
    sliderContainer.style.transform = `translateX(-${slideAt * 100}%)`;
    slides[slideAt].setAttribute("data-scale", 1);
    let element = slides[slideAt];
    const handlePrevSlides = (element) => {
      if (element.previousElementSibling) {
        let el = element.previousElementSibling;
        let scaleValue = el.getAttribute("data-scale");
        el.setAttribute("data-scale", Number(scaleValue) - 0.1);
        handlePrevSlides(el);
        resizeSlides();
      }
    };
    const handleAfterSlides = (element) => {
      if (element.nextElementSibling) {
        let el = element.nextElementSibling;
        let scaleValue = el.getAttribute("data-scale");
        el.setAttribute("data-scale", Number(scaleValue) + 0.1);
        handleAfterSlides(el);
        resizeSlides();
      }
    };
    handlePrevSlides(element);
    handleAfterSlides(element);
  }
});

leftButton.addEventListener("click", () => {
  if (slideAt > 0) {
    --slideAt;
    sliderContainer.style.transform = `translateX(-${slideAt * 100}%)`;
    slides[slideAt].setAttribute("data-scale", 1);
    let element = slides[slideAt];
    const handlePrevSlides = (element) => {
      if (element.previousElementSibling) {
        let el = element.previousElementSibling;
        let scaleValue = el.getAttribute("data-scale");
        el.setAttribute("data-scale", Number(scaleValue) + 0.1);
        handlePrevSlides(el);
        resizeSlides();
      }
    };
    const handleAfterSlides = (element) => {
      if (element.nextElementSibling) {
        let el = element.nextElementSibling;
        let scaleValue = el.getAttribute("data-scale");
        el.setAttribute("data-scale", Number(scaleValue) - 0.1);
        handleAfterSlides(el);
        resizeSlides();
      }
    };
    handlePrevSlides(element);
    handleAfterSlides(element);
  }
});
