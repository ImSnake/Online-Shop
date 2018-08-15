"use strict";

/**
 *
 */
const sliderComments= {
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


window.onload = function() {

//построение навигационных меню по товарам в хедэре
    const renderNav = new NavRender(navItems);
    renderNav.getMenu('header-navigation');
    renderNav.getBrowse('browse-items');

    cart.getCartItems();

//обработчик события при клике 'удалить из корзины'
    $('#in-cart').on('click', '.remove-good-from-cart',  function(event) {
        cart.deleteFromCart($(this));
        event.preventDefault();
    });

// TODO: По умолчанию - корзина пуста

};

/*
(function ($) {
    $(function() {

    });
})(jQuery);
*/
