import Glizzy from './glizzy.jpg';
import menu from './menu.js';

//LOADS HOME PAGE & CREATES DOM ELEMENTS
export default function home() {
let content = document.querySelector('#content');
content.classList.add('content');

let tabSection = document.createElement('div');
tabSection.classList.add('tabSection');
content.appendChild(tabSection);

for(let i=0; i<2; i++){
    let tab = document.createElement('btn');
    tab.classList.add('tab');
    tabSection.appendChild(tab);
    if(i==0) {
        tab.textContent = 'Home';
        tab.classList.add('home');
    } else {
        tab.textContent = 'Menu';
        tab.classList.add('menu');
    }
}

let header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);
header.textContent = 'Welcome to Glizzy Land!';

const glizzy = new Image();
glizzy.src = Glizzy;
content.appendChild(glizzy);
glizzy.classList.add('glizzy');


//code to switch from home to menu
let homeBtn = document.querySelector('.home');
let menuBtn = document.querySelector('.menu');

homeBtn.addEventListener('click', ()=>{
    document.body.innerHTML = '';
    let content = document.createElement('div');
    document.body.appendChild(content);
    content.setAttribute('id', 'content');
    home();
})

menuBtn.addEventListener('click', ()=> {
    document.body.innerHTML = '';
    let content = document.createElement('div');
    document.body.appendChild(content);
    content.setAttribute('id', 'content');
    menu(); 
})
}


