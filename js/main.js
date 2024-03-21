const swiper = new Swiper('.reviews__slider', {
   
    loop: true,
    slidesPerView: 1,
    spaceBetween: 22,

    navigation: {
      nextEl: '.reviews__item-next',
      prevEl: '.reviews__item-prev',
    },
    breakpoints: {
        // when window width is <= 768px
        600: {
          slidesPerView: 2,
          spaceBetween: 22,
        },
    }
  
  });

const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () =>{
    menuList.classList.toggle('menu--open')
})