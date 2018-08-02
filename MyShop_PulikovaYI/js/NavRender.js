"use strict";

/** NavRender: class создание навигационного меню сайта
 * @param {object} menu объект-DTO c картой меню
 * @param {number} subColumns счетчик для элементов меню 3-го уровня, контроль длины меню 2-го уровня
 * @param {HTMLElement} container элемент для
 */
class NavRender {
    constructor(menu, className) {
        this.menu = menu;
        this.subColumns = 0;
        this.container = document.getElementsByClassName(className)[0];
    }

    /** getMenu метод для отрисовки навигационного меню
     * Запускает методы для отрисовки меню и передает данные в DOM
     */
    getMenu() {
        let navHTML = '';
        for (let i = 0; i < this.menu.length; i++) {
            this.subColumns = 0;
            navHTML += this.renderItem(this.menu[i].href, this.menu[i].name);
            if (this.menu[i].hasOwnProperty('items')) {
                navHTML += this.getSubMenu(this.menu[i].items);
            }
            navHTML += `</li>`;
        }
        this.container.innerHTML = navHTML;
    }

    /** getSubMenu метод создает контейнер со стилями для меню 2-го уровня,
     * находит и отделят элементы меню 3-го уровня
     * разделяет меню 3-го уровня на колонки в зависисмости от длины элементов списка
     * @param {object} subMenu обект с данными о меню 2 и 3-го уровней
     * @return {string} все элементы и стили меню 2 и 3-го уровней
     */
    getSubMenu(subMenu) {
        let sub = `<div class="traingle-mega-menu"></div><div class="mega-menu"><div class="mega-menu-column">`;
        for (let i = 0; i < subMenu.length; i++) {
            let subTitle = Object.getOwnPropertyNames(subMenu[i]).sort();
            if (this.subColumns >= 8) {
                sub += `</div><div class="mega-menu-column">`;
                this.subColumns = 0;
            }
            sub += `<h3>${subTitle}</h3><ul>${this.renderSubMenu(subMenu[i], subTitle)}</ul>`;
        }
        sub += `</div></div>`;
        return sub;
    }

    /** renderSubMenu метод отрисовка одного элемента подменю
     * @param {object} subItem объект подменю: заголовок + список
     * @param {string} prop заголовок подменю
     * @return {string} subMenu элкменты меню 3-го уровня
     */
    renderSubMenu(subItem, prop) {
        let items = [], subMenu = '';
        for (const i in subItem) {
            if (subItem.hasOwnProperty(prop)) {
                items = subItem[i];
            }
        }
        for (let i = 0; i < items.length; i++, this.subColumns++) {
            subMenu += this.renderItem(items[i].href, items[i].name);
        }
        return subMenu;
    }

    /** renderItem метод отрисовка одной строки списка
     * @param {string} href ссылка на страницу сайта
     * @param {string} name заголовк ссылки в меню
     * @return {string} строка списка "ссылка + имя"
     */
    renderItem(href, name) {
        return `<li><a href="${href}">${name}</a>`;
    }
}

//TODO: прикрутить ActiveLink в зависимости от страницы
