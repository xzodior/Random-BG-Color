const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'white'];

button.addEventListener('click', changeBackground);

function changeBackground(){
    let colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
    button.style.backgroundColor = colors[colorIndex];
}

/* parseInt() is used to convert string to a number data type. 
Math.random() is used which picks a random number from 0 to 1.
This random number is multiplied by the amount of elements inside the colors array.
The colorIndex now holds a random number value.
*/