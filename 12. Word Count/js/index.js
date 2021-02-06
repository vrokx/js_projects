var input = document.getElementById("inputBox");
var output = document.getElementById("outputBox");
var btn = document.querySelector("button");

function counting() {
  var count = input.value.length;

  output.innerHTML = count;

  btn.style.boxShadow =
    "inset 5px 5px 10px #7ea59c ,inset -5px -5px 10px #aadfd4";

  setTimeout(() => {
    btn.style.backgroundColor = "#94c2b8";
    btn.style.boxShadow = "5px 5px 10px #7ea59c, -5px -5px 10px #aadfd4";
  }, 150);
}
