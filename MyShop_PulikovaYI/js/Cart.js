'use strict';

/**
 *
 */
class GoodInCart {
    constructor(title, price, imageLink, url, id, qty) {
        this.title = title;
        this.price = price;
        this.url = url;
        this.imageLink = imageLink;
        this.id = id;
        this.qty = qty;
        this.el = this.createElement();
    }

    createElement(){
        return document.querySelector('#template-cart .good-in-cart').cloneNode(true);
    }

    render() {
        this.el.querySelector('.cart-title').innerHTML = this.title;
        this.el.querySelector('.cart-price').innerHTML = `$${this.price}.00`;
        this.el.querySelector('.in-total').innerHTML = `$${this.price * this.qty}.00`;
        this.el.querySelector('.cart-amount').innerHTML = this.qty;
        this.el.querySelector('.cart-url').setAttribute('href', this.url);
        this.el.querySelector('.cart-good-image').setAttribute('src', this.imageLink);
        this.el.querySelector('.cart-good-image').setAttribute('alt', this.title);
        this.el.setAttribute('data-id', this.id);
        return this.el;
    }
}

/**
 *
 */
const cart = {
    container: document.getElementById('in-cart'),
    goodsInCart: [],
    amount: 0,
    total: 0,

    /**
     *
     */
    getCartItems(){
       $.get('http://localhost:3000/cart', {}, function(list) {
               cart.goodsInCart = list;
               cart.renderCart(cart.container, cart.goodsInCart);
       }, 'json');
    },

    /**
     *
     */
    renderCart(elem, list){
        this.amount = 0;
        this.total = 0;

        //console.log(list);
        elem.innerHTML='';
        for (let goodView, i = 0; i < list.length; i++) {
            this.amount += parseInt(list[i].amount);
            let sum = list[i].amount * list[i].price;
            this.total += sum;

            goodView = new GoodInCart(list[i].title, list[i].price, list[i].imageLink, list[i].productLink, list[i].id, list[i].amount);
            elem.appendChild(goodView.render());
        }

        document.getElementById('total').innerHTML = `$${this.total}.00`;
        document.querySelector('.number-of-goods span').innerHTML = this.amount;
        this.cartAnimation();
    },

    /**
     *
     */
    cartAnimation(){
        if (this.amount >= 2) {
            $('#cart').addClass('shake-bottom');
        } else {
            $('#cart').removeClass('shake-bottom');
        }
    },

    /**
     *
     */
    checkCart(id){
        for (let i = 0; i < cart.goodsInCart.length; i++) {
            if (this.goodsInCart[i].id === id){
                this.goodsInCart[i].amount = parseInt(this.goodsInCart[i].amount) + 1;
                let url = 'http://localhost:3000/cart/' + parseInt(id);
                $.ajax({
                    type: 'PATCH',
                    url: url,
                    data: {amount: cart.goodsInCart[i].amount},
                    success: function () {
                        cart.renderCart(cart.container, cart.goodsInCart);
                    }
                });
                return true
            }
        }
        return false;
    },

    /**
     *
     */
    pushGoodToCart(id){
        let good = goods.goodToCart(id);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/cart',
            data: good,
            success: function () {
                cart.getCartItems();
            }
        });
    },

    /**
     *
     */
    deleteFromCart(good){
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/cart/' + good.closest('.good-in-cart').attr('data-id'),
            success: function () {
                cart.getCartItems();
            }
        });
    }
};
