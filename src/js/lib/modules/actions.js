import $ from "../core";

//Ф-я по внедрению текста в элемент
$.prototype.html = function(content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

$.prototype.eq = function(i) {
  const swap = this[i];
  const objLength = Object.keys(this).length; //кол-во(length) свойств (object.keys) объекта(this)

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

//Ф-я по получению номера элемента по порядку среди всех его соседей у одного общего родителя
$.prototype.index = function() {
  const parent = this[0].parentNode; //получаем родителя
  const childs = [...parent.children]; //получаем всех детей родителя и превращаем в массив

  const findMyIndex = (item) => {
    return item == this[0]; // в перебираемых item из childs внутри мы найдем самый первый элемент
  };

  return childs.findIndex(findMyIndex);
};

//Поиск элементов о определенному селектору среди уже найденных
$.prototype.find = function(selector) {
  let numberOfItems = 0; //общее кол-во элементов которые понадобятся в будущем
  let counter = 0; //кол-во записанных элементов

  const copyObj = Object.assign({}, this); //неглубоко копируем наш объект this

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector); //вычленяем нужные нам селекторы из каждого(i) элемента скопированного объекта copyObj
    if (arr.length == 0) { //Если ни одного элемента не найдено
      continue; // то пропускаем итерацию цикла
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j]; //внутрь перезаписываем элементы по номерам //arr[j] -каждый отдельный элемент, кот-й нашли по селектору //this[counter] - общий объект, куда записываем по порядку 
      counter++; //запись по порядку
    }
    numberOfItems += arr.length; //общее кол-во элементов + кол-во элементов записанных в arr
  }
  this.length = numberOfItems;
  //Удаление оставшегося хвостика неперезаписанных элементов
  const objLength = Object.keys(this).length; //кол-во(length) свойств (object.keys) объекта(this)
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this; //возврат модифицированного объекта this
};

//Метод, кот-й определяет ближайший блок по заданному селектору
$.prototype.closest = function(selector) {
  let counter = 0; //кол-во методов, кот-е нашли при помощи closest

  for (let i = 0; i < this.length; i++) {
    if (this[i] = this[i].closest(selector)) {
      this[i] = this[i].closest(selector);
      counter++;
    } else {
      console.error(`Parent '${selector}' for this childs not found`);
    }
  }
  const objLength = Object.keys(this).length; //кол-во(length) свойств (object.keys) объекта(this)
  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  return this;
};

//Метод, который получает все соседние элементы не получая сам элемент
$.prototype.siblings = function() {
  let numberOfItems = 0; //общее кол-во элементов которые понадобятся в будущем
  let counter = 0; //кол-во записанных элементов

  const copyObj = Object.assign({}, this); //неглубоко копируем наш объект this

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children; //вытаскиваем всех детей родителя текущего элемента

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) { //если текущий элемент равен элементу, кот-й сейчас перебирается, то его пропускаем
        continue;
      }
      this[counter] = arr[j]; //внутрь перезаписываем элементы по номерам //arr[j] -каждый отдельный элемент, кот-й нашли по селектору //this[counter] - общий объект, куда записываем по порядку 
      counter++; //запись по порядку
    }
    numberOfItems += arr.length - 1; //общее кол-во элементов + кол-во элементов записанных в arr - 1 сам элемент
  }
  this.length = numberOfItems;
  //Удаление оставшегося хвостика неперезаписанных элементов
  const objLength = Object.keys(this).length; //кол-во(length) свойств (object.keys) объекта(this)
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this; //возврат модифицированного объекта this
};
