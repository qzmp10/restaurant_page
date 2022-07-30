import "./style.css";
import Glizzy from './glizzy.jpg';
import home from './home.js';
import menu from './menu.js';

//NOTE TO SELF => PUBLISH A PAGE OF THIS PROJECT ON GITHUB & CHECK IF IT WORKS WITH THE MODULES N SHIT

home();

let tabBtns = document.querySelectorAll('.tab');

tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', ()=> {
        if(tabBtn.textContent == 'Menu') {
            document.body.innerHTML = ''; //CLEARS PAGE HTML
            let content = document.createElement('div'); //RECREATE CONTENT DIV SO menu() & home() CAN ACCESS IT 
            document.body.appendChild(content); // APPEND IT TO BODY
            content.setAttribute('id', 'content'); //SET ITS ID
            menu(); //LOAD MENU
        } else {
            //SAME AS PREVIOUS 
            document.body.innerHTML = '';
            let content = document.createElement('div');
            document.body.appendChild(content);
            content.setAttribute('id', 'content');
            home(); // LOAD HOME
        }
    });
})













