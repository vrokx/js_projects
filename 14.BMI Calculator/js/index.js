const height = document.querySelector("#inputHeight");
const weight = document.querySelector("#inputWeight");
const result = document.querySelector("#result");

function calculate(){
    
    if((height.value === '') || (height.value <= 0 ) || (isNaN(height.value))){
        alert("Please provide a valid Height");
    }
    else if((weight.value === '') || (weight.value <= 0 ) || (isNaN(weight.value))){
        alert("Please provide a valid Weight");
    }
    else{
    const bmi = (weight.value / ((height.value*height.value)/10000)).toFixed(2);
    result.innerHTML = bmi;
    }
}   