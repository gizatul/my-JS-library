import $ from "./core";
import './modules/display'; // будет подвязываться к ф-ии $
import './modules/classes';
import './modules/handlers';
import './modules/attributes';
import './modules/actions';
import './modules/effects';

export default $; //экспорт ф-ии $, кот-я насыщена различными функциональностями описанными выше
//lib.js файл экспортов для объединения всего где мы собираем библиотеку
//lib.js нужен для того чтобы обогатить ф-ю $ различными методами