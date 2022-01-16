const navList = document.querySelector('.nav__list'),
      burger = document.querySelector('.menu__btn');
burger.addEventListener('click', () => {
  navList.classList.toggle('nav__list--visible');
});

let mixer = mixitup('.menu__items',{
  animation: {
    effectsIn: 'fade translateY(-100%)',
    animateResizeContainer: false,
    clampHeight: false,
    clampWidth: false,
  }
});