let gallerySlider = document.querySelector(".full-card-slider");

if(gallerySlider) {
  let galleryNextButton = document.querySelector(".full-card-gallery__button--next");
  let galleryPrevButton = document.querySelector(".full-card-gallery__button--prev");
  let productGalleryThumbsSlider = new Splide(".full-card-slider-thumbs", {
    pagination : false,
    arrows     : false,
    isNavigation    : true,
    perPage    : 4,
    gap        : 20,
    mediaQuery: "max",
    breakpoints: {
      950: {
        perPage    : 3,
      }
    }
  }).mount();


  let productGallery = new Splide(gallerySlider, {
    pagination : false,
    arrows     : false,
    rewind     : true,
    gap        : 20,
  }).mount();

  productGallery.sync(productGalleryThumbsSlider);

  galleryNextButton.addEventListener("click", () => {
    productGallery.go("+1");
  });

  galleryPrevButton.addEventListener("click", () => {
    productGallery.go("-1");
  });
}

