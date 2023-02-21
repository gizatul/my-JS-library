import $ from "../core";

$.prototype.animateOverTime = function(dur, cb, fin) { //dur -duration длительность анимации, cb(необяз) - ф-я, кот-я будет выполняться после того как анимация запустилась, fin(необяз) - запустится после того как анимация отработала
  let timeStart; //

  function _animateOverTime(time){ //тех функция установки времени, она запускается через определнный промежуток времени кот-й решает браузер. Ф-я каждый раз автоматически будет получать аргумент time от браузера(специфика JS)
    if(!timeStart) { //если не установлен timestart
      timeStart = time; //когда анимация только запускается то в timeStart запускаем переменную time
    } // В итоге получаем стартовое значение в мс

    let timeElapsed = time - timeStart; //time постоянно увеличивается, и от него отнимаем постоянное стартовое время (timeStart) - используем для расчета прогресса
    let complection = Math.min(timeElapsed / dur, 1) //complection отвечает за изменение параметров на странице. Т.к у opacity макс значение 1, то второй аргумент 1. Первый аргумент будет постоянно расти, и если превысит 1, то станет уже неактуальным

    cb(complection); //значение complection используем для функции колбэка 

    if(timeElapsed < dur) { //пока время с момента запуска(timeElapsed) меньше длительности (dur)
      requestAnimationFrame(_animateOverTime); //работает анимация
    } else {//после того как окончилась анимация
      if (typeof fin === 'function') {  // и аргумент fin является функцией
        fin(); // то запускаем финальную ф-ю
      }
    }
  }
  return _animateOverTime;
};

$.prototype.show = function(dur, displ, fin, i) {
  this[i].style.display = displ || 'block'; //по умол значение 'block'
    const _fadeIn = (complection) => {
      this[i].style.opacity = complection; //opacity принимает значение complection, рассчитанное выше (от 0 до 1)
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani); //запуск воспроизведения анимации
};

$.prototype.hide = function(dur, fin, i) {
  const _fadeOut = (complection) => {
    this[i].style.opacity = 1 - complection; //opacity принимает значение complection, рассчитанное выше (от 0 до 1)
    if (complection === 1) {
      this[i].style.display = 'none'; //если элемент полностью стал прозрачным, то мы его скрываем со страницы
    }
  };

  const ani = this.animateOverTime(dur, _fadeOut, fin);
  requestAnimationFrame(ani); //запуск воспроизведения анимации
}

$.prototype.fadeIn = function(dur, displ, fin) {
  for (let i = 0; i < this.length; i++) {
    this.show(dur, displ, fin, i);
  }
  return this;
};

$.prototype.fadeOut = function(dur, fin) {
  for (let i = 0; i < this.length; i++) {
    this.hide(dur, fin, i);
  }
  return this;
};

$.prototype.fadeToggle = function (dur, displ, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') { //если у элемента св-во none
      this.show(dur, displ, fin, i); //то показываем
    } else {
      this.hide(dur, fin, i); //иначе скрываем
    }
  }
  return this;
};
  
