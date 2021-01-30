/*var btn = document.getElementsByClassName("btn");

function calculate(){
    btn.classList.toggle("btnClicked");
    setTimeout(removeClass , 400);

    function removeClass(){
        btn.classList.add("btn");
    }
}*/
var amnt = document.getElementById("amnt");
var people = document.getElementById("people");
var service = document.getElementById("service");
var para = document.querySelectorAll("p");


function calculate(){
    var tip = (amnt.value*service.value)/100 ;
    para[0].innerHTML = ("Tip Amount: " + tip);

    var total = (parseInt(amnt.value) + tip);
    para[1].innerHTML = ("Total Amount: " + total);

    var share = (total/parseInt(people.value));
    para[2].innerHTML = ("Each Person Owes: "  + share);
}