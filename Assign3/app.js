const h1 = document.querySelector('h1');
const reduce = document.querySelector('.reduce');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');

let value  = 0;

// Reducing the value
function decrement() {
    value -= 1;  
    h1.textContent = value;
    h1.style.color = 'red';
}
reduce.addEventListener('click', decrement);


function increment() {
    value += 1;  
    h1.textContent = value;
    h1.style.color = 'green';
}
add.addEventListener('click', increment);


function original() {
    value = 0;
    h1.textContent = value;
    h1.style.color = 'black';
}

reset.addEventListener('click', original);

// function reset() {
//     value = 0;
//     h1.textContent = value;
//     h1.style.color = 'black';
// }

// reset.addEventListener('click', reset);
