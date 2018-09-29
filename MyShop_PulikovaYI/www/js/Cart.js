'use strict';

/**
 *GoodInCart класс для отрисовки товаров в корзине
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
 *cart Объект с методами для корзины в хэдере
 * @param {HTML} container для отрисовки товаров
 * @param {[object]} goodsInCart список товаров в корзине
 * @param {number} amount количество товаров в корзине
 * @param {number} total сумма всех товаров в корзине
 */
const cart = {
    container: document.getElementById('in-cart'),
    goodsInCart: [],
    amount: 0,
    total: 0,

    /**
     *getCartItems заправшивает список товаров в корзине с сервера, сохраняет, запускает метод отрисовки
     * @return{[object]} сохраняет список товаров в объект cart.goodsInCart
     */
    getCartItems(){
       $.get('http://www.driveplan.net/_goods/goods.json', {}, function(list) {
               cart.goodsInCart = list;
               cart.renderCart(cart.goodsInCart);
       }, 'json');
    },

    /**
     *renderCart отрисовывает содержимое корзины, суммирует товары и стоимость
     *@param {[object]} list список товаров для отрисовки
     */
    renderCart(list){
        this.clearCounter();

        for (let goodView, i = 0; i < list.length; i++) {
            this.amount += parseInt(list[i].amount);
            this.total +=list[i].amount * list[i].price;
            goodView = new GoodInCart(list[i].title, list[i].price, list[i].imageLink, list[i].productLink, list[i].id, list[i].amount);
            cart.container.appendChild(goodView.render());
        }

        document.getElementById('total').innerHTML = `$${this.total}.00`;
        document.querySelector('.number-of-goods span').innerHTML = this.amount;
        this.cartAnimation();
    },

    /**
     *clearCounter очищает контейнер для отрисовки, обнуляет счетчики цены и товаров
     */
    clearCounter(){
        this.amount = 0;
        this.total = 0;
        cart.container.innerHTML='';
    },

    /**
     *cartAnimation если в корзине +=2 товара - добавляет эффект анимации
     */
    cartAnimation(){
        if (this.amount >= 2) {
            $('#cart').addClass('shake-bottom');
        } else {
            $('#cart').removeClass('shake-bottom');
        }
    },

    /**
     *checkCart проверяет наличие выбранного товара в корзине.
     * Если товар есть - увеличивает количество и перерисовывает корзину. Если нет - вернет false
     *@param {string} id товара
     *@return {boolean}
     */
    checkCart(id){
        for (let i = 0; i < cart.goodsInCart.length; i++) {
            if (this.goodsInCart[i].id === id){
                this.goodsInCart[i].amount = parseInt(this.goodsInCart[i].amount) + 1;
                let url = 'http://www.driveplan.net/_goods/goods.json' + parseInt(id);
                $.ajax({
                    type: 'PATCH',
                    url: url,
                    data: {amount: cart.goodsInCart[i].amount},
                    success: function () {
                        cart.renderCart(cart.goodsInCart);
                    }
                });
                return true
            }
        }
        return false;
    },

    /**
     *pushGoodToCart добавляет новый товар в корзину на сервере, запускает методы отрисовки корзины
     *@param {string} id товара
     *@return {object} good данные о товаре
     */
    pushGoodToCart(id){
        let good = goods.goodToCart(id);
        $.ajax({
            type: 'POST',
            url: 'http://www.driveplan.net/_goods/goods.json',
            data: good,
            success: function () {
                cart.getCartItems();
            }
        });
    },

    /**
     *deleteFromCart удаляет товар с сервера, запускает метод отрисовки корзины
     * @param {html} good контейнер с товаром
     */
    deleteFromCart(good){
        $.ajax({
            type: 'DELETE',
            url: 'http://www.driveplan.net/_goods/goods.json' + good.closest('.good-in-cart').attr('data-id'),
            success: function () {
                cart.getCartItems();
            }
        });
    },

    /**
     *addCartEventListener добавляет слушатель события на клик "удалить из корзины"
     */
    addCartEventListener(){
        $('#in-cart').on('click', '.remove-good-from-cart',  function(event) {
            cart.deleteFromCart($(this));
            event.preventDefault();
        });
    },
};


// TODO: По умолчанию - корзина пуста
// TODO: Удалять товары по 1 штуке
// TODO: Сообщение -Товар добавлен в корзину