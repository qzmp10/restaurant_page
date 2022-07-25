import Glizzy from './glizzy.jpg';

export default function menu(){ 
let content = document.querySelector('#content');
content.classList.add('content');

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
}