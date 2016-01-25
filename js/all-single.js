/**
 * Created by Donghui Huo on 2015/7/31.
 */
$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: "thumbnails",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    })
});

