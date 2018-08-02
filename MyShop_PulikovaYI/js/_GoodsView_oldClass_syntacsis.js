"use strict";

/**
 * DTO Goods description for good-box list
 */
const products = [
	 {
			title: 'Mango People T-shirt',
			price: 45,
			imageLink: 'images/good-1.jpg',
	 },
	 {
			title: 'Mango People T-shirt',
			price: 145,
			imageLink: 'images/good-2.jpg',
	 },
	 {
			title: 'Mango People T-shirt',
			price: 1245,
			imageLink: 'images/good-3.jpg',
	 },
	 {
			title: 'Mango People T-shirt',
			price: 0.45,
			imageLink: 'images/good-4.jpg',
	 },
];

const GoodsView = function(products){
	 this.items = products;
	 this.el = document.getElementById('products');
};

GoodsView.prototype.render = function(){
	 for (let goodView, i = 0; i < this.items.length; i++ ) {
			goodView = new GoodView(this.items[i].title, this.items[i].price, this.items[i].imageLink);
			this.el.appendChild(goodView.render());
	 }
};

const GoodView = function(title, price, imageLink){
	 this.title = title;
	 this.price = price;
	 this.imageLink = imageLink;
	 this.el = this.createElement();
};

GoodView.prototype.createElement = function(){
	 return document.querySelector('#template .good-box').cloneNode(true);
};

GoodView.prototype.render = function(){
	 this.el.querySelector('.good-title').innerHTML = this.title;
	 this.el.querySelector('.good-price').innerHTML = this.price;
	 this.el.querySelector('.good-image').setAttribute('src', this.imageLink);
	 return this.el;
};

window.onload = function(){
	 const goodsView = new GoodsView(products);
	 goodsView.render();
};