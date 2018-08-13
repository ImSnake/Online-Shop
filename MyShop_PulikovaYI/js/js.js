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

/**
 * Управляет отображением товаров на страницах магазина
 */
const goods = {
     /**
     *@param{HTML} elem
     *@param{[object]} list
     *@return{function} goodsView
     */
    findFilter(elem, list){
        if (elem.getAttribute('data-category') !== null) {
            let filter = elem.getAttribute('data-category');
            //console.log(filter);
            let sortedList = [];
            for (let i = 0; i < list.length; i++) {
                for (const prop in list[i]) {
                    if (list[i][prop] === filter) {
                        sortedList.push(products[i]);
                    }
                }
            }
            //console.log(sortedList);
            const goodsView = new GoodsView(sortedList);
            return goodsView.render();
        }
        const goodsView = new GoodsView(products);
        goodsView.render();
    },
};

window.onload = function() {

    const renderNav = new NavRender(navItems);
    renderNav.getMenu('header-navigation');
    renderNav.getBrowse('browse-items');


    //если страница содержит блок с товарами
    if (document.getElementById('products') !== null) {
        goods.findFilter(document.getElementById('products'), products);
    }

    /*
    if (document.getElementById('slider-comments') !== null){
        sliderComments.getSlideContent();
    }
    */
};





