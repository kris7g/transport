let slideIndex = 1;
  slides = document.querySelectorAll('.carousel_inner'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    } 
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function() {
    plusSlides(-1);
  });
  
  next.addEventListener('click', function() {
    plusSlides(1);
  });

  



