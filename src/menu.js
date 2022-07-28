// finished the style in this bitch and ur done
import Glizzy from './glizzy.jpg';

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
    } else {
        tab.textContent = 'Menu';
    }
}
// added after git commit, so figure how to make it look good & commit again

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
}