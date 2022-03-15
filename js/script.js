$(document).ready(function(){
    $('.carousel_slide').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });
});

window.addEventListener('DOMContentLoaded', function() {
  let btnMe = document.querySelectorAll('.menu_button');
      overlay = document.querySelector('.overlay');
      close = document.querySelector('.modal__close');
      btnCalc = document.querySelector('.menu_button_1');
      pageup = document.querySelector('.pageup');
      hamburger = document.querySelector('.hamburger');
      menu = document.querySelector('.menu_list');
      menuItem = document.querySelectorAll('.menu_item');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
  });

  btnMe[0].addEventListener('click', function() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  });

  btnMe[1].addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    });

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });

  btnCalc.addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
  pageup.addEventListener('scroll', function() {
    if (scrollTop() > 1600) {
      pageup.style.display = 'block';
    } else {
      pageup.style.display = 'none';
    }
  });
});

