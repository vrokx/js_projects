function changeColor(){
    const body = document.querySelector('body');
    const colors = ['red' , 'blue' , 'yellow' , 'purple' , 'green' , 'orange'];

    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}