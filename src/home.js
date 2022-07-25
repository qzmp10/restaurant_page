import Glizzy from './glizzy.jpg';

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
    } else {
        tab.textContent = 'Menu';
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
}
