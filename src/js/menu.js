import chickenBiscuit from '../assets/chicken-sandwich-biscuits.jpg';
import biscuitStack from '../assets/biscuits.jpg';

const renderMenu = (() => {

    const content = document.getElementById('content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-content', '');

    menu.innerHTML = `
    <h1>Menu</h1>
    <div class="menu-item-container">
    <div class="menu-item">
        <img width="200" height="200" src="${chickenBiscuit}">
        <h3 class="menu-item-name">Chicken Biscuit Sandwich</h3>
        <h5 class="menu-item-price">11.99</h5>
        <p class="menu-item-description">Buttermilk fried chicken breast, served with chile in adobo aioli on a house biscuit.</p>
    </div>
    <div class="menu-item">
        <img src="${biscuitStack}">
        <h3 class="menu-item-name">Biscuit Sampler</h3>
        <h5 class="menu-item-price">5.99</h5>
        <p class="menu-item-description">4 variations of our house biscuits.</p>
    </div>
    </div>`;

    content.appendChild(menu);


})();

export { renderMenu };