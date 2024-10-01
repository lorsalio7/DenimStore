"use strict";

var burgerButton = document.querySelector(".burger-button");
var headerSiteMenu = document.querySelector(".site-header__site-navigation");
var siteHeader = document.querySelector(".site-header");
var burgerMenuWidth = window.matchMedia("(max-width: 720px)");
window.addEventListener("scroll", function () {
  var offsetTop = window.pageYOffset;
  if (offsetTop > 0) {
    siteHeader.classList.add("site-header--shady");
  } else {
    siteHeader.classList.remove("site-header--shady");
  }
});
burgerButton.addEventListener("click", function () {
  burgerButton.classList.toggle("burger-button--active");
  if (burgerButton.classList.contains("burger-button--active")) {
    openSiteMenu();
  } else {
    closeSiteMenu();
  }
});
function openSiteMenu() {
  burgerButton.setAttribute("aria-label", "Закрыть меню");
  headerSiteMenu.style.display = "block";
  setTimeout(function () {
    headerSiteMenu.classList.add("site-header__site-navigation--active");
  }, 10);
}
function closeSiteMenu() {
  burgerButton.setAttribute("aria-label", "Открыть меню");
  burgerButton.classList.remove("burger-button--active");
  headerSiteMenu.classList.remove("site-header__site-navigation--active");
  setTimeout(function () {
    headerSiteMenu.removeAttribute("style");
  }, 500);
}
function changeMenuView(width) {
  if (!width) {
    closeSiteMenu();
  }
}
burgerMenuWidth.onchange = function (e) {
  changeMenuView(e.matches);
};
var gallerySlider = document.querySelector(".full-card-slider");
if (gallerySlider) {
  var galleryNextButton = document.querySelector(".full-card-gallery__button--next");
  var galleryPrevButton = document.querySelector(".full-card-gallery__button--prev");
  var productGalleryThumbsSlider = new Splide(".full-card-slider-thumbs", {
    pagination: false,
    arrows: false,
    isNavigation: true,
    perPage: 4,
    gap: 20,
    mediaQuery: "max",
    breakpoints: {
      950: {
        perPage: 3
      }
    }
  }).mount();
  var productGallery = new Splide(gallerySlider, {
    pagination: false,
    arrows: false,
    rewind: true,
    gap: 20
  }).mount();
  productGallery.sync(productGalleryThumbsSlider);
  galleryNextButton.addEventListener("click", function () {
    productGallery.go("+1");
  });
  galleryPrevButton.addEventListener("click", function () {
    productGallery.go("-1");
  });
}
;