function changeColor(){
    const body = document.querySelector('body');
    const hexValues = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd', 'e', 'f'];
    const Value = document.querySelector('#Value');

    let hex = '#' ;

    for(let i = 0 ; i < 6 ; i++){

        const index = Math.floor(Math.random()*hexValues.length);
        hex += hexValues[index];
    }
    Value.textContent = hex;
    body.style.backgroundColor = hex;
}