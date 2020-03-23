var header = document.getElementById("active-div");
var btns = header.getElementsByClassName("service-item");
var arrow = header.querySelectorAll(".down");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
