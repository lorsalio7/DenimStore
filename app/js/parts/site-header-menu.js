const burgerButton = document.querySelector(".burger-button");
const headerSiteMenu = document.querySelector(".site-header__site-navigation");
const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  let offsetTop = window.pageYOffset;
  if(offsetTop > 0) {
    siteHeader.classList.add("site-header--shady");
  } else {
    siteHeader.classList.remove("site-header--shady");
  }
})

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-button--active");
  if(burgerButton.classList.contains("burger-button--active")) {
    openSiteMenu();
  } else {
    closeSiteMenu()
  }
});

function openSiteMenu() {
  burgerButton.setAttribute("aria-label", "Закрыть меню");
  headerSiteMenu.style.display = "block";
  headerSiteMenu.style.maxHeight = headerSiteMenu.scrollHeight + "px";
}

function closeSiteMenu() {
  headerSiteMenu.style.maxHeight = 0;
  burgerButton.setAttribute("aria-label", "Открыть меню");
  setTimeout(() => {
    headerSiteMenu.style.display = "none";
    headerSiteMenu.removeAttribute("style");
  },500)
}
