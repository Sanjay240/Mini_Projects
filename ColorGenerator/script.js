let heading = document.querySelector('h1');
let btn = document.querySelector('button');
let box = document.querySelector('div');

function createRandom(){
    return Math.floor(Math.random()*255);
}

btn.addEventListener('click', function(){
    let color = `rgb(${createRandom()},${createRandom()},${createRandom()})`;
    heading.innerText = color;
    box.style.backgroundColor = color;
})