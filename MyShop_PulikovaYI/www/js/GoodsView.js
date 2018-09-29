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
 * @param {HTML} title, price, imageLink, url, id - получает значения
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
 * @param {HTML} container для отрисовки товаров
 * @param {[object]} actualGoodsList список товаров для отрисовки
 */
const goods = {
	container: document.getElementById('products'),
	filter: document.getElementById('products').getAttribute('data-filter'),
	actualGoodsList: [],


    /**getGoodsList при наличии атрибута "data-filter" запросит список актуальных товаров с сервера, применит фильтр, запустит отрисовку
	 *@return{[object]} сохранит обработанный список в goods.actualGoodsList
     */
    getGoodsList () {
    	if (this.filter !== null) {
    		$.ajax({
                url: 'http://www.driveplan.net/_goods/goods.json',
                type: 'GET',
                dataType : 'json',
                success: function (data) {
                	let list = data;
                    console.log(data);
                    goods.getFilter(list);
                    goods.renderGoods();
                },
                error: function(e){
                    console.log(e);
                }
            });
        }
    },

    /**findFilter фильтрует список товаров для отображения;
	 *если фильтр "all" - вернет первые 20 товаров списка;
	 *если это страница товара - вернет 4 товара того-же типаж;
	 *если иное - ищет фильтр в значениях свойста товара;
     *@param{[object]} list список товаров, полученный с сервера
     *@return{[object]} отфильтрованный список
     */
    getFilter(list){
        console.log(list);
        let sortedList = this.actualGoodsList;

        if (this.filter === "all") {
            for (let i = 0; i < 20; i++) {
                sortedList.push(list[i]);
            }
            console.log(sortedList);
            return sortedList;
        }

        if (this.filter === "find"){
            this.filter = document.getElementById('good-id').getAttribute('data-type');
            for (let i = 0; i < list.length; i++) {
                for (const prop in list[i]) {
                    if (list[i][prop] === this.filter) {
                        sortedList.push(list[i]);
                    }
                }
            }
            return sortedList;
		}

        for (let i = 0; i < list.length; i++) {
            for (const prop in list[i]) {
                if (list[i][prop] === this.filter) {
                    sortedList.push(list[i]);
                }
            }
        }
    },

    /**
     *renderGoods метод отрисовки отфильтрованных товаров
     */
    renderGoods(){
        console.log(data);
        const goodsView = new GoodsView(goods.actualGoodsList);
        goodsView.render();
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

    //обработчик события при клике на кнопку 'add-to-cart'
	addGoodsEventListener(){
        $('#products').on('click', '.good-to-cart a', function(event) {
            const id = $(this).attr('data-id');
            if (cart.checkCart(id) === false) {
                cart.pushGoodToCart(id);
            }
            event.preventDefault();
        });
	},


// single-good-card.html - фильтр по свойству productType в зависимости от выбранного товара
// eсли html имеет класс "you-may-like-also", определяет фильтр для отрисовки 4-х товаров
     findFilter(){

	},
};

//TODO: фильтр 'you-may-like-also' должен учитывать категорию

