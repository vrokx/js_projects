var amnt = document.getElementById("amnt");
var people = document.getElementById("people");
var service = document.getElementById("service");
var para = document.querySelectorAll("p");
var btn = document.querySelector(".btn");

function calculate(){
    var tip = (amnt.value*service.value)/100 ;
    para[0].innerHTML = ("Tip Amount: " + tip);

    var total = (parseInt(amnt.value) + tip);
    para[1].innerHTML = ("Total Amount: " + total);

    var share = (total/parseInt(people.value));
    para[2].innerHTML = ("Each Person Owes: "  + share);

    btn.style.background =  "#e0f7ff";
    btn.style.boxShadow = "inset 5px 5px 10px #abced9, inset -5px -5px 10px #e7ffff";

    setTimeout(() => {
        btn.style.background =  "#c9f2ff";
        btn.style.boxShadow = "5px 5px 10px #bed2d9,-5px -5px 10px #ffffff";
    }, 150);
}