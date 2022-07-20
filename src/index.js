import "./style.css"

let content = document.querySelector('#content');

let element = document.createElement('div');

element.textContent = "test";

element.classList.add('red');

content.appendChild(element);