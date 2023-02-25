import $ from "../core";

$.prototype.tab = function() {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on('click', () => {
      $(this[i])
        .addClass('tab-item--active') //добавляем класс активности элементу
        .siblings().removeClass('tab-item--active') //удаляем класс активности у всех соседей
        .closest('.tab') //находим родителя tab
        .find('.tab-content') //внутри родителя ищем элемент tab-content
        .removeClass('tab-content--active') //удаляем класс активности у всех таб-контентов
        .eq($(this[i]).index()) // ч/з index находим нужный номер элемента по порядку на котором произошло событие, потом передается в eq
        .addClass('tab-content--active'); // и добавляем класс актиности нужному tab-контенту
    });
  }
};

$('[data-tabpanel] .tab-item').tab();