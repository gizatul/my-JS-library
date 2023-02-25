import $ from "../core";

let calcScroll = function() {
  let div = document.createElement('div'); 
  div.style.width = '50px'; 
  div.style.height = '50px'; 
  div.style.overflowY = 'scroll'; 
  div.style.visibility = 'hidden'; 

  document.body.appendChild(div); 
  let scrollWidth = div.offsetWidth - div.clientWidth; 
  div.remove();
  return scrollWidth;
}
let scroll = calcScroll();

$.prototype.modal = function(created) {   //аргумент created отвечает создано ли модал окно программно(с помощью скрипта)
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    });

    const closeElements = document.querySelectorAll(`${target} [data-close]`); //target - уникальный идентификатор окна
    closeElements.forEach(elem => {
      $(elem).click(() => {
        $(target).fadeOut(500); //target - закрываем то самое окно, которое открыто
        document.body.style.overflow = '';
        document.body.style.marginRight = ``;
        if (created) { //если модал окно создано программно
          document.querySelector(target).remove(); //то окно удаляем со страницы
        }
      });
    });

    $(target).click(e => {
      if (e.target.classList.contains('modal')) {
        $(target).fadeOut(500);
        setTimeout (() => {
          document.body.style.overflow = '';
          document.body.style.marginRight = ``;
          if (created) { 
            document.querySelector(target).remove();
          }
        }, 500);
      }
    });
  }
};

$('[data-toggle="modal"]').modal();

//Динамическое создание модал окон
$.prototype.createModal = function({text, btns} = {}) { //передаем объект настроек
  for (let i = 0; i < this.length; i++) { //цикл, чтобы пройтись по всем элементам
    let modal = document.createElement('div'); //создаем модалку
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); //ставим атрибут такой же как и на вызывающей его кнопке
    
    // btns ={count: num, settings: [[text, classNames=[], close, cb]]} //close -закрывающая ли кнопка
    const buttons = []; //здесь будут храгится html-ноды
    for (let j = 0; j < btns.count; j++) { //count - пользовательское св-во, указывающее кол-во кнопок
      let btn = document.createElement('button'); //создание кнопки

      btn.classList.add('btn', ...btns.settings[j][1]); //добавление классов для стилизации
      btn.textContent = btns.settings[j][0]; //помещение текста
      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true'); // проверка на close и установка атрибута
      }
      if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
        btn.addEventListener('click', btns.settings[j][3]); //проверка на ф-ю и создание ОС
      }
      buttons.push(btn); //внедряем результат в массив с кнопками
    }

    modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
          <button class="close" data-close>
              <span>&times;</span>
          </button>
          <div class="modal-header">
              <div class="modal-title">
                  ${text.title}
              </div>
          </div>
          <div class="modal-body">
              ${text.body}
          </div>
          <div class="modal-footer">

          </div>
      </div>
    </div>`; //внутренности модалки
    modal.querySelector('.modal-footer').append(...buttons); //размещаем кнопки
    document.body.appendChild(modal); //размещаем модал окно на страницу
    $(this[i]).modal(true); //подвязываем нужный триггер к модал окно
    $(this[i].getAttribute('data-target')).fadeIn(500);  //появление нужного окна
  }
};

// есть вариант разворачивания массива кнопок в HTML-строки, но при этом и callback-ф-я превратится в строку и не будет работать, поэтому такой вариант отметаем и используем метод append