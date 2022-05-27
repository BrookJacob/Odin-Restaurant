import './style.css';
import { renderNavBar } from './js/navBar';
import { renderHomeTab } from './js/home';
import { renderMenu } from './js/menu';
import { renderContact } from './js/contact';

const buttons = document.querySelectorAll('button');
const contentDivs = document.querySelectorAll('[data-content]');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetContent = document.querySelector(btn.dataset.target);
        contentDivs.forEach((cDiv) => {
            cDiv.classList.remove('active-content');
        });
        buttons.forEach((btn) => {
            btn.classList.remove('active-button');
        });
        btn.classList.add('active-button');
        targetContent.classList.add('active-content');
    })
});