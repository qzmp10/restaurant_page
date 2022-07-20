import "./style.css";
import Glizzy from './glizzy.jpg';

let content = document.querySelector('#content');
content.classList.add('content');


const glizzy = new Image();
glizzy.src = Glizzy;
content.appendChild(glizzy);

