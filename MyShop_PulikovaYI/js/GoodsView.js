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
				 goodView = new GoodView(this.items[i].title, this.items[i].price, this.items[i].imageLink);
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
	 constructor(title, price, imageLink) {
			this.title = title;
			this.price = price;
			this.imageLink = imageLink;
			this.el = this.createElement();
	 }

	 createElement(){
			return document.querySelector('#template .good-box').cloneNode(true);
	 }

	 render() {
			this.el.querySelector('.good-title').innerHTML = this.title;
			this.el.querySelector('.good-price').innerHTML = `${this.price}.00`;
			this.el.querySelector('.good-image').setAttribute('src', this.imageLink);
			return this.el;
	 }
}