"use strict";

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