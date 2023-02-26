import $ from "../core";

$.prototype.addClass = function(...classNames) { //оператор ... - rest - собирает все аргументы в массив
    for (let i = 0; i < this.length; i++) {
      if (!this[i].classList) {
        continue;
      }
      this[i].classList.add(...classNames); //оператор spread - разворачивает классы
    }
    return this;
};

$.prototype.removeClass = function(...classNames) { //оператор ... - rest - собирает все аргументы в массив
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...classNames); //оператор spread - разворачивает классы
  }
  return this;
};

$.prototype.toggleClass = function(classNames) { //оператор ... - rest - собирает все аргументы в массив
    for (let i = 0; i < this.length; i++) {
      if (!this[i].classList) {
        continue;
      }
      this[i].classList.toggle(classNames); //оператор spread - разворачивает классы
    }
  return this;
};
