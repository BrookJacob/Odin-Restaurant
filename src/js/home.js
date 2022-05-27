import image from '../assets/biscuits-and-gravy-sign.jpg';

const renderHomeTab = (() => {

    const content = document.getElementById('content');
    const home = document.createElement('div');
    home.classList.add('active-content');
    home.setAttribute('id', 'home');
    home.setAttribute('data-content', '');

    home.innerHTML += `<div class="image-quote-wrapper">
    <img width="267" height="200" src="${image}">
    <div class="figure-wrapper">
        <figure>
            <blockquote>These are the best biscuits that I have had in a long time.</blockquote>
            <figcaption>&mdash; Jacob, a satisified customer</figcaption>
        </figure>
    </div>
    </div>`

    content.appendChild(home);
})();

export { renderHomeTab };