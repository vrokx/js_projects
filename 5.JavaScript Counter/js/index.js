var counter = document.querySelector('#counter') ;
var lowbtn = document.querySelector('#lowerBtn') ;
var addbtn = document.querySelector('#addBtn') ;
let count = 0 ;

function add(){
       count++ ;
       counter.textContent = count ;
       addbtn.classList.toggle("clicked");
}
function subtract(){
        count-- ;
        counter.textContent = count ;
        lowbtn.classList.toggle("clicked");
}