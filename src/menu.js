import home from './home.js';
import Glizzy from './glizzy.jpg';

//LOADS MENU PAGE & CREATES DOM ELEMENTS
export default function menu(){  
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
header.textContent = 'The Glizzy Land Menu!';

let mainBlock = document.createElement('div');
mainBlock.classList.add('mainBlock');
content.appendChild(mainBlock);

const glizzy = new Image();
glizzy.src = Glizzy;
mainBlock.appendChild(glizzy);
glizzy.classList.add('glizzy');

let subBlock = document.createElement('div');
subBlock.classList.add('subBlock');
mainBlock.appendChild(subBlock);
subBlock.textContent = 'Obviously, our menu is composed of the one and only legendary glizzy!';

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