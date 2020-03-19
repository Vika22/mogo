$(function () {
    $('.slider-speech').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><i class="right"></i></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><i class="left"></i></button>',
        dots: false
    });

});
var header = document.getElementById("active-div");
var btns = header.getElementsByClassName("service-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
