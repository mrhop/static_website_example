/**
 * Created by Donghui Huo on 2015/9/15.
 */
window.html2canvas = html2canvas = require("html2canvas");
var $ = global.jQuery = require("jquery");
require("jQueryPrint");
module.exports = (function () {
    var PrintObj = function () {
        this.printEle = document.createElement("div");
        this.printEle.id = "print-button";
        this.printBody();
    };
    PrintObj.prototype = {
        printEle: null,
        beforeBg: null,
        printBody: function () {
            var _this = this;
            $(this.printEle).click(function () {
                _this.beforeBg = $("body").css("background-color");
                $("body").css("background-color", "#fff");
                $(".hideSwfImg").css("visibility","visible");
                html2canvas(document.body, {
                    onrendered: function (canvas) {
                        var newImageData = canvas.toDataURL("image/png", 100);
                        var result_image_obj = new Image();
                        result_image_obj.src = newImageData;
                        $(result_image_obj).css("width", $(window).width()).css("height", Math.max($(document).height(),$(window).height()));
                        $("body").css("background-color", _this.beforeBg);
                        $(".hideSwfImg").css("visibility","hidden");
                        $(result_image_obj).print();
                    }
                });
            });
            document.body.appendChild(this.printEle);
        }
    }
    return new PrintObj();
})();

var printObj = require("./print");
//进入到打印阶段
