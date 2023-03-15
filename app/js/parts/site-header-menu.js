const burgerButton = document.querySelector(".burger-button");
const headerSiteMenu = document.querySelector(".site-header__site-navigation");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-button--active");
  if(burgerButton.classList.contains("burger-button--active")) {
    openSiteMenu();
  } else {
    closeSiteMenu()
  }
});

function openSiteMenu() {
  headerSiteMenu.style.display = "block";
  headerSiteMenu.style.maxHeight = headerSiteMenu.scrollHeight + "px";
}

function closeSiteMenu() {
  headerSiteMenu.style.maxHeight = 0;
  setTimeout(() => {
    headerSiteMenu.style.display = "none";
    headerSiteMenu.removeAttribute("style");
  },500)
}
