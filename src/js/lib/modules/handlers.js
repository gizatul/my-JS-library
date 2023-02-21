import $ from "../core"; //импорт главной ф-ии

$.prototype.on = function (eventName, callback) {
  if (!eventName || !callback) { //если не переданы аргументы, то просто возвращаем объект this
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback); 
  }
  return this;
}

$.prototype.off = function (eventName, callback) {
  if (!eventName || !callback) { //если не переданы аргументы, то просто возвращаем объект this
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback); 
  }
  return this;
}

$.prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler); //если передали ф-ю в аргумент
    } else {
      this[i].click(); //иначе (если не передали) просто автоклик
    }
  }
  return this;
}