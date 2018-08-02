"use strict";

/**
 *
 */
window.onload = function(){
    const renderHeaderNav = new NavRender(headerNav, 'header-navigation');
    renderHeaderNav.getMenu();

    const goodsView = new GoodsView(products);
    goodsView.render();

    /*
    $('.header-navigation li').hover(function() {
        $(this).children(`.traingle-mega-menu, .mega-menu`).fadeIn(1000).toggleClass('hideList');
    }, function () {
        $(`.traingle-mega-menu, .mega-menu`).fadeOut(1000).toggleClass('hideList');
    });
    */
};

//Функция для создания изолированного скоупа для элементов jQuery
(function ($) {
    $(document).ready(
        function () {

});
})(jQuery);


