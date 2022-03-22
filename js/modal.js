let btnMe = document.querySelectorAll('.menu_button'),
      overlay = document.querySelectorAll('.overlay'),
      close = document.querySelectorAll('.modal__close'),
      btnCalc = document.querySelector('.menu_button_1'),
    priceButton = document.querySelectorAll('.price_button');

btnMe.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay[0].style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

close[0].addEventListener('click', () => {
    overlay[0].style.display = 'none';
    document.body.style.overflow = '';
});

const allButtons = [...priceButton, btnCalc];

changeContent = (array) => {
    array.forEach((elem) => {
        elem.addEventListener('click', () => {
            overlay[1].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    close[1].addEventListener('click', () => {
            overlay[1].style.display = 'none';
            document.body.style.overflow = '';
        });
};

changeContent(allButtons);


