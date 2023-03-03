let dropdownFilter = document.querySelector(".dropdown-filter");

if(dropdownFilter) {
  let optionList = dropdownFilter.querySelector(".dropdown-filter__list");
  let options = dropdownFilter.querySelectorAll(".dropdown-filter__option");
  let selectedOption = dropdownFilter.querySelector(".dropdown-filter__text");

  dropdownFilter.onfocus = function() {

    document.addEventListener("keydown", (e) => {
      if(e.code === "Enter") {
        openDropdown();
      }
    });
  }

  selectedOption.addEventListener("click", openDropdown);

  function openDropdown() {
    dropdownFilter.classList.toggle("dropdown-filter--active");
    optionList.classList.toggle("dropdown-filter__list--active");
  }

  function closeDropdown() {
    dropdownFilter.classList.remove("dropdown-filter--active");
    optionList.classList.remove("dropdown-filter__list--active");
  }

  document.addEventListener("click", (e) => {
    if(e.target !== selectedOption && optionList.classList.contains("dropdown-filter__list--active")) {
      closeDropdown();
    }
  });
  options.forEach((item) => {
    item.addEventListener("click", (e) => {
      let optionText = e.currentTarget.textContent;
      dropdownFilter.classList.remove("dropdown-filter--active");
      optionList.classList.remove("dropdown-filter__list--active");

      selectedOption.textContent = optionText;

    });
    item.onfocus = function() {
      document.addEventListener("keydown", (e) => {
        if(e.code === "Enter") {
          selectedOption.textContent = item.textContent;
          closeDropdown();
        }
      })
    }
  })
}
