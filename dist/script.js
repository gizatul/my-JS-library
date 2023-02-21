/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector); //запускаем ф-ю init созданную ниже // каждый раз будем при использовании $, каждый раз будет создаваться новый объект(new) с методом init и с переданным внутри селектором
};
//Ф-я для получения тех элементов, с которыми будем работать
$.prototype.init = function (selector) {
  //задаем ф-ю init prototype-у
  if (!selector) {
    //для избавления от ошибки с переданным пустым селектором
    return this; //здесь вернется новосозданный пустой объект {}
  }

  if (selector.tagName) {
    //если селектор html-элемент
    this[0] = selector; //на первую позицию помещаем тот элемент
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector)); //object.assign используем чтобы возвращать не массив dqsAll, а объект, чтобы использовать методы объектов //в пустой объект this пушим dqsAll с элементами selector // с помощью this сохраняем prototype 
  this.length = document.querySelectorAll(selector).length; //в объект записали св-во для получения кол-ва элементов 
  return this; //здесь в итоге хранятся прототипы и элементы selector
};

$.prototype.init.prototype = $.prototype; // $.prototype.init.prototype - это прототип возвращаемого this из $.prototype.init, в него записываем прототип главной ф-ии $ //прототип библиотеки лежит теперь в каждой сущности, вызванной через init.
window.$ = $; //записываем нашу ф-я в глобальный объект window

/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");

 // будет подвязываться к ф-ии $





/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]); //экспорт ф-ии $, кот-я насыщена различными функциональностями описанными выше
//lib.js файл экспортов для объединения всего где мы собираем библиотеку
//lib.js нужен для того чтобы обогатить ф-ю $ различными методами

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


//Ф-я по внедрению текста в элемент
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
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
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode; //получаем родителя
  const childs = [...parent.children]; //получаем всех детей родителя и превращаем в массив

  const findMyIndex = item => {
    return item == this[0]; // в перебираемых item из childs внутри мы найдем самый первый элемент
  };

  return childs.findIndex(findMyIndex);
};

//Поиск элементов о определенному селектору среди уже найденных
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; //общее кол-во элементов которые понадобятся в будущем
  let counter = 0; //кол-во записанных элементов

  const copyObj = Object.assign({}, this); //неглубоко копируем наш объект this

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector); //вычленяем нужные нам селекторы из каждого(i) элемента скопированного объекта copyObj
    if (arr.length == 0) {
      //Если ни одного элемента не найдено
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
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
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
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0; //общее кол-во элементов которые понадобятся в будущем
  let counter = 0; //кол-во записанных элементов

  const copyObj = Object.assign({}, this); //неглубоко копируем наш объект this

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children; //вытаскиваем всех детей родителя текущего элемента

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        //если текущий элемент равен элементу, кот-й сейчас перебирается, то его пропускаем
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

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAttribute = function (attributeName, attributeValue) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute(attributeName, attributeValue)) {
      this[i].setAttribute(attributeName, attributeValue);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.deleteAttribute = function (attributeName) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].removeAttribute(attributeName)) {
      this[i].removeAttribute(attributeName);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (attributeName, attributeValue) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(attributeName)) {
      this[i].setAttribute(attributeName, attributeValue);
    } else {
      this[i].removeAttribute(attributeName);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  //оператор ... - rest - собирает все аргументы в массив
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...arguments); //оператор spread - разворачивает классы
  }

  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  //оператор ... - rest - собирает все аргументы в массив
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...arguments); //оператор spread - разворачивает классы
  }

  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  //оператор ... - rest - собирает все аргументы в массив
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(classNames); //оператор spread - разворачивает классы
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  //dur -duration длительность анимации, cb(необяз) - ф-я, кот-я будет выполняться после того как анимация запустилась, fin(необяз) - запустится после того как анимация отработала
  let timeStart; //

  function _animateOverTime(time) {
    //тех функция установки времени, она запускается через определнный промежуток времени кот-й решает браузер. Ф-я каждый раз автоматически будет получать аргумент time от браузера(специфика JS)
    if (!timeStart) {
      //если не установлен timestart
      timeStart = time; //когда анимация только запускается то в timeStart запускаем переменную time
    } // В итоге получаем стартовое значение в мс

    let timeElapsed = time - timeStart; //time постоянно увеличивается, и от него отнимаем постоянное стартовое время (timeStart) - используем для расчета прогресса
    let complection = Math.min(timeElapsed / dur, 1); //complection отвечает за изменение параметров на странице. Т.к у opacity макс значение 1, то второй аргумент 1. Первый аргумент будет постоянно расти, и если превысит 1, то станет уже неактуальным

    cb(complection); //значение complection используем для функции колбэка 

    if (timeElapsed < dur) {
      //пока время с момента запуска(timeElapsed) меньше длительности (dur)
      requestAnimationFrame(_animateOverTime); //работает анимация
    } else {
      //после того как окончилась анимация
      if (typeof fin === 'function') {
        // и аргумент fin является функцией
        fin(); // то запускаем финальную ф-ю
      }
    }
  }

  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, displ, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = displ || 'block'; //по умол значение 'block'
    const _fadeIn = complection => {
      this[i].style.opacity = complection; //opacity принимает значение complection, рассчитанное выше (от 0 до 1)
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani); //запуск воспроизведения анимации
  }

  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection; //opacity принимает значение complection, рассчитанное выше (от 0 до 1)
      if (complection === 1) {
        this[i].style.display = 'none'; //если элемент полностью стал прозрачным, то мы его скрываем со страницы
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani); //запуск воспроизведения анимации
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //импорт главной ф-ии

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    //если не переданы аргументы, то просто возвращаем объект this
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    //если не переданы аргументы, то просто возвращаем объект this
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler); //если передали ф-ю в аргумент
    } else {
      this[i].click(); //иначе (если не передали) просто автоклик
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(1).fadeOut(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).fadeOut(1000);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').eq(2).on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').fadeOut(3000);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map