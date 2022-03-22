
window.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu_list'),
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

  // calc
  let distance = document.querySelectorAll('.distance__input')[0],
      wT = document.querySelectorAll('.distance__input')[1],
      totalValue = document.querySelector('.total'),
      way = document.getElementById('way'),
      distanceSum = 0,
      wtSum = 0,
      total = 0;
  
  totalValue.innerHTML = 0;

  distance.addEventListener('change', function() {
    distanceSum = +this.value;
    total = (distanceSum * wtSum)*100;
    if(wT.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  wT.addEventListener('change', function() {
    wtSum = +this.value;
    total = (distanceSum * wtSum)*100;
    if(distance.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  
  way.addEventListener('change', function() {
    if(wT.value == '' || distance.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = Math.round(a * this.options[this.selectedIndex].value);
    }
  });
});

