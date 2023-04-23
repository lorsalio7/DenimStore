let gallerySlider = document.querySelector(".full-card-slider");

if(gallerySlider) {
  let productGalleryThumbsSlider = new Swiper(".full-card-slider-thumbs", {
    slidesPerView: 3,
    spaceBetween: 40,

    breakpoints: {
      500: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  let productGallery = new Swiper(gallerySlider, {
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: ".full-card-gallery__button--next",
      prevEl: ".full-card-gallery__button--prev"
    },
    thumbs: {
      swiper: productGalleryThumbsSlider
    }
  });
}

