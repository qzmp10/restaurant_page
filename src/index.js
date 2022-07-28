import "./style.css";
import Glizzy from './glizzy.jpg';
import home from './home.js';
import menu from './menu.js';


home();

let tabBtns = document.querySelectorAll('.tab');

tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', ()=> {
        if(tabBtn.textContent == 'Menu') {
            document.body.innerHTML = '';
            menu();
        } else {
            document.body.innerHTML = '';
            home();
        }
    });
})













