const burgerButton = document.querySelector(".burger-button");
const headerSiteMenu = document.querySelector(".site-header__site-navigation");
const siteHeader = document.querySelector(".site-header");
const burgerMenuWidth = window.matchMedia("(max-width: 720px)");

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
  setTimeout(() => {
    headerSiteMenu.classList.add("site-header__site-navigation--active");
  }, 10);
}

function closeSiteMenu() {
  burgerButton.setAttribute("aria-label", "Открыть меню");
  burgerButton.classList.remove("burger-button--active");
  headerSiteMenu.classList.remove("site-header__site-navigation--active");
  setTimeout(() => {
    headerSiteMenu.removeAttribute("style");
  },500);
}

function changeMenuView(width) {
  if(!width) {
    closeSiteMenu();
  }
}

burgerMenuWidth.onchange = (e) => {
  changeMenuView(e.matches);
}
