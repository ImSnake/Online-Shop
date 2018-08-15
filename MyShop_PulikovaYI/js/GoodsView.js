"use strict";

/** GoodsView: class
 * @param {array} products - получает массив объектов с данными о товарах
 * @param {HTML} products - находит в DOM элемент, в который передает значения из массива products
 * @param {function} render - перебирает полученный массив
 * @return {class} GoodView(title, price, imageLink) - создает объект на базе класса GoodView
 */
class GoodsView {
	 constructor (products){
			this.items = products;
			this.el = document.getElementById('products');
	 }
	 render(){
             for (let goodView, i = 0; i < this.items.length; i++ ) {
                 goodView = new GoodView(this.items[i].title, this.items[i].price, this.items[i].imageLink, this.items[i].productLink, this.items[i].id);
                 this.el.appendChild(goodView.render());
             }
	 }
}

/** GoodView: class
 * @param {HTML} title, price, imageLink - получает значения
 * @param {HTML} el - элемент DOM
 * @param {function} createElement - клонирует элемент из шаблона
 * @param {function} render - заполняет el значениями, переданными из GoodsView
 * @return {object} el создает элемент DOM
 */
class GoodView {
	 constructor(title, price, imageLink, url, id) {
			this.title = title;
			this.price = price;
			this.url = url;
			this.imageLink = imageLink;
			this.id = id;
			this.el = this.createElement();
	 }

	 createElement(){
			return document.querySelector('#template .good-box').cloneNode(true);
	 }

	 render() {
			this.el.querySelector('.good-title').innerHTML = this.title;
			this.el.querySelector('.good-price').innerHTML = `${this.price}.00`;
			this.el.querySelector('.good-url').setAttribute('href', this.url);
			this.el.querySelector('.good-image').setAttribute('src', this.imageLink);
			this.el.querySelector('.good-image').setAttribute('alt', this.title);
			this.el.querySelector('.add-to-cart').setAttribute('data-id', this.id);
			return this.el;
	 }
}

/**
 * Объект с методами для отображения товаров на страницах магазина
 */
const goods = {
	container: document.getElementById('products'),
	actualGoodsList: [],

    /** getGoodsList метод для запроса списка всех актуальных товаров с сервера
	 *@return{[object]} сохраняет список товаров в объект goods.actualGoodsList
     */
    getGoodsList () {
        $.get('http://localhost:3000/goods', {}, function(list) {
            goods.actualGoodsList = list;
            //console.log(goods.actualGoodsList);
			if (goods.container.getAttribute('data-filter') !== null) {
                goods.getFilter(goods.actualGoodsList);
            }
            const goodsView = new GoodsView(goods.actualGoodsList);
            goodsView.render();
        }, 'json')
    },

    /**findFilter метод определяет фильтр для отрисовки товаров на странице по атрибуту 'data-filter'
     *@param{[object]} list актуальный список всех товаров магазина, полученный с сервера
     *@return{function} goodsView запускает метод отрисовки товаров на странице
     */
    getFilter(list){
        let filter = goods.container.getAttribute('data-filter');
        //console.log(filter);
		let sortedList = [];
		for (let i = 0; i < list.length; i++) {
			for (const prop in list[i]) {
				if (list[i][prop] === filter) {
					sortedList.push(list[i]);
				}
			}
		}
		this.actualGoodsList = sortedList;
		//console.log(goods.actualGoodsList);
    },

    /**goodToCart метод находит по id в объекте товаров, отрисованных на странице, собирает и передает необходимую информацию о выбранном товаре
     *@param {number} id выбранного товара
     *@return {object} вся информация о выбранном товаре
     */
	goodToCart (id){
        for (let i = 0; i < this.actualGoodsList.length; i++) {
        	if (this.actualGoodsList[i].id === id) {
        		let obj = this.actualGoodsList[i];
                obj.amount = 1;
        		//console.log(obj);
                return obj;
        	}
        }
	},

//TODO: настроить фильтр: отражать 4 товара
// single-good-card.html - фильтр по свойству productType в зависимости от выбранного товара
// eсли html имеет класс "you-may-like-also", определяет фильтр для отрисовки 4-х товаров
     findFilter(){
	},
};


(function ($) {
    $(function() {

//если страница содержит какой-либо блок с товарами, запуск методов отрисовки
        if ($('#products') !== null) {
            goods.getGoodsList();
        }

//обработчик события при клике 'add-to-cart'
        $('#products').on('click', '.good-to-cart a', function(event) {
            const id = $(this).attr('data-id');
            if (cart.checkCart(id) === false) {
                cart.pushGoodToCart(id);
            }
            event.preventDefault();
        });
    });
})(jQuery);

