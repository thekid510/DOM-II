// Your code goes here
// Type 1 
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {btn.addEventListener('click',
 (event) => { event.target.style.backgroundColor = 'blue'; });
})

// Type 2 
const links = document.querySelectorAll('.nav');
links.forEach(link => {link.addEventListener('mouseover',
 (event) => { event.target.style.color = 'red'; });
})

// type 3
const p = document.querySelectorAll('p');
Array.from(p).forEach(Element => {
    Element.addEventListener('dblclick', (event => {
        event.target.style.backgroundColor = 'pink';
    }));
})

//type 4 

const h4 = document.querySelectorAll('h4');
Array.from(h4).forEach(Element => {
    Element.addEventListener('dblclick', (event => {
        event.target.style.backgroundColor = 'pink';
    }));
})

// type 5

const funBus = document.querySelectorAll('h1');
Array.from(funBus).forEach(Element => {
    Element.addEventListener('dblclick', (event => {
        event.target.style.border-box = '1px solid black';
    }));
})