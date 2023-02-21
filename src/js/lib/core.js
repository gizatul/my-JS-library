const $ = function(selector) {
    return new $.prototype.init(selector); //запускаем ф-ю init созданную ниже // каждый раз будем при использовании $, каждый раз будет создаваться новый объект(new) с методом init и с переданным внутри селектором
};
//Ф-я для получения тех элементов, с которыми будем работать
$.prototype.init = function(selector) { //задаем ф-ю init prototype-у
    if (!selector) { //для избавления от ошибки с переданным пустым селектором
        return this; //здесь вернется новосозданный пустой объект {}
    }
    if (selector.tagName) { //если селектор html-элемент
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

export default $;