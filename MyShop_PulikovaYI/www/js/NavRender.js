"use strict";

/** NavRender: class создание навигационных меню сайта: browse и nav
 * @param {[object]} menu данные о структуре меню из dto
 * @param {number} subColumns счетчик отрисованных элементов 3-го уровня в колонках (mega-menu-column) .
 */
class NavRender {
    constructor(menu) {
        this.menu = menu;
        this.subColumns = 0;
    }

    /** getBrowse запуск методов отрисовки browse (details)
     */
    getBrowse(elem){
        let browseHTML = '';
        for (let i = 0; i < this.menu.length; i++){
            if (this.menu[i].hasOwnProperty('items')){
                browseHTML += `<span>${this.menu[i].name}</span><hr><ul>${this.renderSubMenu(this.menu[i].items)}</ul>`;
            }
        }
        document.getElementById(elem).innerHTML = browseHTML;
    }

    /** getMenu запуск методов отрисовки навигационного меню nav
     */
    getMenu(elem) {
        let navHTML = '';
        for (let i = 0; i < this.menu.length; i++) {
            this.subColumns = 0;
            navHTML += this.renderItem(this.menu[i].href, this.menu[i].name);
            if (this.menu[i].hasOwnProperty('items')) {
                navHTML += this.getSubMenu(this.menu[i].items);
            }
            navHTML += `</li>`;
        }
        document.getElementById(elem).innerHTML = navHTML;
    }

    /** getSubMenu метод создает контейнер со стилями для меню 2-го уровня,
     * находит и отделят элементы меню 3-го уровня
     * разделяет меню 3-го уровня на колонки в зависисмости от длины элементов
     * @param {object} subMenu обект с данными о меню 2 и 3-го уровней
     * @return {string} все элементы и стили меню 2 и 3-го уровней
     */
    getSubMenu(subMenu) {
        let sub2 = `<div class="traingle-mega-menu"></div><div class="mega-menu"><div class="mega-menu-column">`;
        for (let i = 0; i < subMenu.length; i++) {
            if (this.subColumns >= 7) {
                sub2 += `</div><div class="mega-menu-column">`;
                this.subColumns = 0;
            }
            sub2 += `<h3>${subMenu[i].name}</h3><ul>${this.renderSubMenu(subMenu[i].subItems)}</ul>`;
        }
        sub2 += `</div></div>`;
        return sub2;
    }

    /** renderSubMenu метод отрисовки элемента меню 3-го уровня со счетчиком кол-ва отрисованных элементов
     * @param {object} subItem элементы 3-го уровня
     * @return {string} subMenu элементы меню 3-го уровня
     */
    renderSubMenu(subItem) {
        let sub3 = '';
        for (let i = 0; i < subItem.length; i++, this.subColumns++) {
            sub3 += this.renderItem(subItem[i].href, subItem[i].name);
        }
        return sub3;
    }

    /** renderItem метод отрисовки одной строки списка
     * @param {string} href ссылка на страницу сайта
     * @param {string} name заголовк ссылки в меню
     * @return {string} строка списка "ссылка + имя"
     */
    renderItem(href, name) {
        return `<li><a href="${href}">${name}</a>`;
    }
}

//TODO: прикрутить ActiveLink в зависимости от страницы
