"use strict";

const mainWatchers = {

    /**
     * Запускает методы для отрисовки навигации
     */
    renderNavigation(){
        const renderNav = new NavRender(navItems);
        renderNav.getMenu('header-navigation');
        renderNav.getBrowse('browse-items');
    },

    /**
     * Если на странице есть боксы с товарами - запускает методы GoodsView
     */
    searchForProducts(){
        if (document.getElementById('products') === null) {
        console.log('no products');
        return;
        }
        goods.getGoodsList();
        goods.addGoodsEventListener();
    },

    /**
     * Если на странице есть корзина в хэдере - запускает методы Cart
     */
    searchForCart(){
        if (document.getElementById('cart') === null) {
            console.log('no cart');
            return;
        }
        cart.getCartItems();
        cart.addCartEventListener();

    },
};


window.onload = function() {

    mainWatchers.renderNavigation();
    mainWatchers.searchForProducts();
    mainWatchers.searchForCart();

};





/**
 *
 */
/*const sliderComments= {
     blocks: [
        {
            imageLink: 'images/comments-1.png',
            text: '"There are a lot of ways to express gratitude. Varying your approach ensures people know you took the time to absorb and respond to their thoughts. Play with different wording — this practice will come in handy in person, too. "',
            name: 'Elena Rozenblad',
            place: 'Oslo, Norway',
        },
        {
            imageLink: 'images/comments-2.png',
            text: '"Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum adsfs. Aliquam condimentum mattis neque sed pretium"',
            name: 'Linda Lorry',
            place: 'London, UK',
        },
    ],

    getSlideContent() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.createSlide(this.blocks[i].imageLink, this.blocks[i].text, this.blocks[i].name, this.blocks[i].place);
        }
    },

    createSlide(url, txt, name, place) {
        let slide = document.getElementById('slider-comments').cloneNode(true);
        slide.removeAttribute('id');
        slide.setAttribute('class', 'comments');
        slide.querySelector('img').setAttribute('src', url);
        slide.querySelector('p').textContent = txt;
        slide.querySelector('h5').textContent = name;
        slide.querySelector('h6').textContent = place;
        //this.slides.push(slide);
        document.getElementById('comments-container').appendChild(slide);
    },
};
*/

/*
(function ($) {
    $(function() {

    });
})(jQuery);
*/
