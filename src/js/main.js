import $ from './lib/lib';


$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeOut(1000);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(1000);
}); 

$('#trigger').click(() => $('#trigger').createModal({ //создание модального окна
  text: {
    title: 'Modal title 3',
    body: 'Обычный большой текст не о чем',
  },
  btns: {
    count: 3, //кол-во кнопок
    settings: [
      [
        'Close', //текст кнопки
        ['btn-danger', 'mr-10'], //классв кнопки
        true, //атрибут закрытия
      ],
      [
        'Save changes', //текст кнопки
        ['btn-success', 'mr-10'], 
        false, //атрибут закрытия
        () => { //колбэк-ф-я кнопки
          alert('Данные сохранены');
        },
      ],
      [
        'Предупредить',
        ['btn-warning'],
        false,
        () => {
          alert('предупреждение отправлено');
        }
      ]
    ]
  }
}));