(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-mobile-btn"),
    closeMenuBtn: document.querySelector(".menu-mobile-close"),
    menu: document.querySelector(".menu-mob"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();