
# Оглавление

- [Оглавление](#оглавление)
- [Введение](#введение)
- [Установка и запуск](#установка-и-запуск)
- [Структура каталогов](#структура-каталогов)
- [Подключение компонентов](#подключение-компонентов)
  - [Подключение стилей](#подключение-стилей)
  - [Подключение скриптов](#подключение-скриптов)
- [Методы](#методы)
  - [Методы действий (html(), eq(), index(), find(), closest(), siblings())](#методы-действий-html-eq-index-find-closest-siblings)
  - [Методы атрибутов (setAttrib(), removeAttrib(), toggleAttrib(), getAttrib(), hasAttrib())](#методы-атрибутов-setattrib-removeattrib-toggleattrib-getattrib-hasattrib)
  - [Методы классов (addClass(), removeClass(), toggleClass(), containsClass())](#методы-классов-addclass-removeclass-toggleclass-containsclass)
  - [Методы обработчики (on(), off(), click())](#методы-обработчики-on-off-click)
- [Компоненты](#компоненты)
  - [Аккордеон (accordion)](#аккордеон-accordion)
    - [Разметка аккордиона](#разметка-аккордиона)
    - [Вызов аккордиона](#вызов-аккордиона)
  - [Выпадающий список (Dropdown)](#выпадающий-список-dropdown)
    - [Разметка выпадающего списка](#разметка-выпадающего-списка)
    - [Вызов dropdown](#вызов-dropdown)
  - [Модальные окна (modal)](#модальные-окна-modal)
    - [Разметка modal](#разметка-modal)
    - [Вызов modal](#вызов-modal)
  - [Вкладки (tabs)](#вкладки-tabs)
    - [Разметка tabs](#разметка-tabs)
    - [Вызов tabs](#вызов-tabs)

---

# Введение
Моя JS-библиотека, выполненная в рамках обучающей практики

[:arrow_heading_up:](#оглавление)

---

# Установка и запуск

Скопируйте архив и распакуйте в папку проекта, запустите команду npm install. После установки пакетов, для начала работы с проектом запустите команду gulp, планировщик собирает рабочий вариант проекта из исходников папки src в рабочую папку проекта dist. При запуске команды gulp prod планировщик производит минификацию файлов проекта в папку dist.

[:arrow_heading_up:](#оглавление)

---

# Структура каталогов

Папки src
```
+---css
+---js
|   \---lib
|       +---components
|       +---modules
|       +---services
\---sass
    +---general
    +---components
    +---helpers

```

[:arrow_heading_up:](#оглавление)

---

# Подключение компонентов
## Подключение стилей
Производится в файле \src\sass\style.sass
```
@import './general/base.scss';
@import './general/variables.scss';
@import './general/typography.scss';
@import './components/ui.scss';
@import './helpers/classes.scss';
```

## Подключение скриптов

Производится в файле \src\js\lib\lib.js
```
import './modules/display'; 
import './modules/classes';
import './modules/handlers';
import './modules/attributes';
import './modules/actions';
import './modules/effects';
import './components/dropdown';
import './components/modal';
import './components/tab';
import './components/accordion';
import './components/carousel';
import './services/requests';
``` 

[:arrow_heading_up:](#оглавление)

---

# Методы

(файл \src\js\lib\core.js)

$() - базовая функция выбора, позволяет производить выбор элементов по селектору, $("selector"). Производит выбор как одного элемента так и множества с одним и тем же селектором.

[:arrow_heading_up:](#оглавление)

---

## Методы действий (html(), eq(), index(), find(), closest(), siblings())

( файл \src\js\lib\modules\actions.js)

**.html("contens")** - изменение или получение содержания html элемента $("selector").html("contens")
если content не передан получаем содержимое $("selector").html()

**.eq(num)** - получение элемента по номеру $("selector").eq(num) где (num 1,2,3, ...)

**.index()** - получение номера элемента по порядку, до одного общего родителя $("child_selector").index()

**.find("selector")** - получение элемента по селектору в пределах родителя $("parent_selector").find("finding_elem_selector")

**.closest("selector")** - получение ближайшего родительского элемента по селектору $("child_selector").closest("finding_parent_selector")

**.siblings()** - получение содедних элементов внутри родительского блока исключая сам блок вызова $("selector").siblings()

[:arrow_heading_up:](#оглавление)

---

## Методы атрибутов (addAttribute(), deleteAttribute(), toggleAttribute()

(файл \src\js\lib\modules\attributes.js )

**.addAttribute("attribut")** - добавление атрибута

**.removeAttribute("attribut")** - удаление атрибута

**.toggleAttribute("attribut")** - переключение атрибута

[:arrow_heading_up:](#оглавление)

---

## Методы классов (addClass(), removeClass(), toggleClass()

(файл \src\js\lib\modules\classes.js )

**.addClass()** - добавление классов

**.removeClass()** - удаление классов

**.toggleClass()** - переключение классов
 
формат вызова $("selector").addClass("class1", "class2", …)

[:arrow_heading_up:](#оглавление)

---

## Методы обработчики (on(), off(), click())

(файл \src\js\lib\modules\handlers.js)

**.on(eventName, callback)** - назначение обработчика события

**.off(eventName, callback)** - удаление обработчика события

**.click(handler)** - назначение обработчика события "клик"

формат вызова $("selector").on("eventName", callbackFunctionName);

[:arrow_heading_up:](#оглавление)

---

# Компоненты

## Аккордеон (accordion)
(файл \src\js\lib\components\accordion.js)

### Разметка аккордиона
```
<div class="accordion mt-20 block-center">
    <div class="accordion-head">
        Collapse first element
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ea mollitia obcaecati voluptate culpa, explicabo, necessitatibus nemo sunt dolore pariatur doloremque sint vitae reprehenderit quaerat ad voluptatem provident? Impedit, nobis!
        </div>
    </div>
    <div class="accordion-head">
        Collapse second element
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ea mollitia obcaecati voluptate culpa, explicabo, necessitatibus nemo sunt dolore pariatur doloremque sint vitae reprehenderit quaerat ad voluptatem provident? Impedit, nobis!
        </div>
    </div>
</div>
```

### Вызов аккордиона

Осуществляется непосредственно из \src\js\lib\components\accordion.js при помощи $(".accordion").accordion();

[:arrow_heading_up:](#оглавление)

---

## Выпадающий список (Dropdown)
(файл \src\js\lib\components\dropdown.js)
### Разметка выпадающего списка
```
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action #2</a>
        <a href="#" class="dropdown-item">Action #3</a>
    </div>
</div>
```
### Вызов dropdown
Осуществляется непосредственно из \src\js\lib\components\dropdown.js при помощи $("#dropdownMenuButton").dropdown();

[:arrow_heading_up:](#оглавление)

---

## Модальные окна (modal)
(файл \src\js\lib\components\modal.js)<br/>

### Разметка modal
```
<div class="modal" id="exampleModal2">
    <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close>
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">
                    Modal title #2
                </div>
            </div>
            <div class="modal-body">
                Lorem ipsum dolor sit 
            </div>
            <div class="modal-footer">
                <button class="btn btn-danger" data-close>Close</button>
                <button class="btn btn-success">Save changes</button>
            </div>
        </div>
    </div>
</div>
```
### Вызов modal
Осуществляется непосредственно из \src\js\lib\components\modal.js при помощи $(".modal").modal();

[:arrow_heading_up:](#оглавление)

---

## Вкладки (tabs)
(файл \src\js\lib\components\tab.js)
### Разметка tabs
```
<div class="tab mt-20 block-center">
    <div class="tab-panel" data-tabpanel>
        <div class="tab-item tab-item--active">Content 1</div>
        <div class="tab-item">Content 2</div>
        <div class="tab-item">Content 3</div>
    </div>
    <div class="tab-content tab-content--active">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed ducimus, similique soluta unde sint molestias, quaerat, ab ut aut architecto! Alias optio minus eos dicta tempore pariatur explicabo omnis.
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque sapiente? Saepe nemo suscipit soluta, magnam deleniti eius! Vero cumque nesciunt quas deserunt maiores excepturi possimus voluptatibus vitae quidem molestiae.
    </div>
    <div class="tab-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed ducimus, similique soluta unde sint molestias, quaerat, ab ut aut architecto! Alias optio minus eos dicta tempore pariatur explicabo omnis.
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque sapiente? Saepe nemo suscipit soluta, magnam deleniti eius! Vero cumque nesciunt quas deserunt maiores excepturi possimus voluptatibus vitae quidem molestiae.
    </div>
    <div class="tab-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed ducimus, similique soluta unde sint molestias, quaerat, ab ut aut architecto! Alias optio minus eos dicta tempore pariatur explicabo omnis.
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque sapiente? Saepe nemo suscipit soluta, mag
    </div>
</div>
```
### Вызов tabs
Осуществляется непосредственно из \src\js\lib\components\tab.js при помощи $("#tabs1").tab();

[:arrow_heading_up:](#оглавление)

---
## Слайдер (Carousel)
(файл \src\js\lib\components\carousel.js)
### Разметка carousel
```
<div class="carousel" id=slider>
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
            <div class="carousel-item">
                <img src="#" alt="mountain">
            </div>
            <div class="carousel-item">
                <img src="#" alt="city">
            </div>
            <div class="carousel-item">
                <img src="#" alt="river">
            </div>
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">&lt;</a>
    <a href="#" class="carousel-next" data-slide="next">&gt;</a>
</div>
```
### Вызов tabs
Осуществляется непосредственно из \src\js\lib\components\carousel.js при помощи $('.carousel').carousel();

[:arrow_heading_up:](#оглавление)

---
