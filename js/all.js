/**
 * Created by Donghui Huo on 2015/7/31.
 */
var $ = global.jQuery = require("jquery");
require("flexslider");
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: "thumbnails",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
    $('.product-case').mouseover(function(){
        $('.sub-menu.product-sub-menu').show();
    })
    $('.product-case').mouseleave(function(){
        $('.sub-menu.product-sub-menu').hide();
    })
});

