import "./style.css";
import Glizzy from './glizzy.jpg';

// u have to finish the css styling
//then figure out a way to modify the text-content & images with different .js module

let content = document.querySelector('#content');
content.classList.add('content');

let tabSection = document.createElement('div');
tabSection.classList.add('tabSection');
content.appendChild(tabSection);

for(let i=0; i<2; i++){
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tabSection.appendChild(tab);

}

let header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);
header.textContent = 'Welcome to Glizzy Land!';


const glizzy = new Image();
glizzy.src = Glizzy;
content.appendChild(glizzy);
glizzy.classList.add('glizzy');

let mainBlock = document.createElement('div');
mainBlock.classList.add('mainBlock');
content.appendChild(mainBlock);

for(let i=0; i<2; i++) {
    let subBlock = document.createElement('div');
    subBlock.classList.add('subBlock');
    mainBlock.appendChild(subBlock)
}

