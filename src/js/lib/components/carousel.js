import $ from "../core";

$.prototype.carousel = function() {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width; //получаем ширину у общего блока с слайдами
    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesField = this[i].querySelector('.carousel-slides');
    const dots = this[i].querySelectorAll('.carousel-indicators li');

    slidesField.style.width = 100 * slides.length + '%'; //установка обертке carousel-slides ширины в зависимоcти от кол-ва слайдов(slides.length)
    slides.forEach(slide => {
      slide.style.width = width; //каждому слайдеру присваиваем нужную ширину
    });

    let offset = 0; //для отслеживания какой слайд сейчас активен и насколько смещать блок
    let slideIndex = 0;

    $(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();
      if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) { //если дошли до конца полной ширины блока //ширина каждого отдельного слайда умноженная на кол-во сладов 
        offset = 0; //то возвращаем слайд на начало
      } else {
        offset += +width.replace(/\D/g, ''); //пока не дошли до конца к offset добавляем ширину каждого отд слайда
      }

      slidesField.style.transform = `translateX(-${offset}px)`; //при клике блок будет смещаться влево
      //Ф-я для точек
      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });

    $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
      e.preventDefault();
      if (offset == 0) { //если дошли до конца полной ширины блока //ширина каждого отдельного слайда умноженная на кол-во сладов 
        offset = (+width.replace(/\D/g, '') * (slides.length - 1)); //то возвращаем слайд на начало
      } else {
        offset -= +width.replace(/\D/g, ''); //пока не дошли до конца к offset добавляем ширину каждого отд слайда
      }

      slidesField.style.transform = `translateX(-${offset}px)`; //при клике блок будет смещаться влево
      //Ф-я для точек
      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    //Ф-я создания ссылки на точки
    const sliderId = this[i].getAttribute('id');
    $(`#${sliderId} .carousel-indicators li`).click(e => {
      const slideTo = e.target.getAttribute('data-slide-to'); //дергаем значение атрибута

      slideIndex = slideTo;
      offset = +width.replace(/\D/g, '') * slideTo; 
      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
  }
};

$('.carousel').carousel();

//this[i] - это общий блок слайдера