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
var dropdownFilter = document.querySelector(".dropdown-filter");
if (dropdownFilter) {
  var openDropdown = function openDropdown() {
    dropdownFilter.classList.toggle("dropdown-filter--active");
    optionList.classList.toggle("dropdown-filter__list--active");
  };
  var closeDropdown = function closeDropdown() {
    dropdownFilter.classList.remove("dropdown-filter--active");
    optionList.classList.remove("dropdown-filter__list--active");
  };
  var optionList = dropdownFilter.querySelector(".dropdown-filter__list");
  var options = dropdownFilter.querySelectorAll(".dropdown-filter__option");
  var selectedOption = dropdownFilter.querySelector(".dropdown-filter__text");
  dropdownFilter.onfocus = function () {
    document.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        openDropdown();
      }
    });
  };
  selectedOption.addEventListener("click", openDropdown);
  document.addEventListener("click", function (e) {
    if (e.target !== selectedOption && optionList.classList.contains("dropdown-filter__list--active")) {
      closeDropdown();
    }
  });
  options.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var optionText = e.currentTarget.textContent;
      dropdownFilter.classList.remove("dropdown-filter--active");
      optionList.classList.remove("dropdown-filter__list--active");
      selectedOption.textContent = optionText;
    });
    item.onfocus = function () {
      document.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
          selectedOption.textContent = item.textContent;
          closeDropdown();
        }
      });
    };
  });
}
;
var gallerySlider = document.querySelector(".full-card-slider");
if (gallerySlider) {
  var productGalleryThumbsSlider = new Swiper(".full-card-slider-thumbs", {
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      500: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  var productGallery = new Swiper(gallerySlider, {
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
;