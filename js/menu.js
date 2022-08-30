(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__open-btn'),
    closeMenuBtn: document.querySelector('.menu__close-btn'),
    menu: document.querySelector('.mob__menu'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob__menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();
