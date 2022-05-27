const renderNavBar = (() => {

    const content = document.getElementById('content');

    content.innerHTML = `<div class="headline-wrapper">
    <h1 class="headline">Better Biscuits</h1>
    <nav class="tabs">
        <div class="btn-housing">
            <button type="Button" id="homeBtn" class="active-button" data-target="#home">Home</button>
        </div>
        <div class="btn-housing">
            <button type="Button" id="menuBtn" data-target="#menu">Menu</button>
        </div>
        <div class="btn-housing">
            <button type="Button" id="contactBtn" data-target="#contact">Contact</button>
        </div>
    </div>
</nav>`;
})();

export { renderNavBar };