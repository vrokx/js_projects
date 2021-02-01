var bulb = document.querySelector("#bulb");
var switch_off = document.getElementById("switch_off");
var switch_on = document.getElementById("switch_on");
var on = document.querySelector(".on");

function switchOn(dropShadow){
    bulb.src = ("/img/pic_bulbon.gif");
    switch_on.style.display = "block";
    on.style.color = "white";
    on.style.textShadow = "1px 1px 5px yellow";
    bulb.style.setProperty("filter",  "drop-shadow(1px 1px 25px yellow)");
}
function switchOff(){
    bulb.src = ("/img/pic_bulboff.gif");
    switch_on.style.display = "none";
    on.style.color = "black";
    on.style.textShadow = "none";
    bulb.style.setProperty("filter",  "drop-shadow(1px 1px 25px gray)");
}