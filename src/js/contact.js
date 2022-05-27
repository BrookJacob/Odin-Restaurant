const renderContact = (() => {

    const content = document.getElementById('content');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-content', '');

    contact.innerHTML = `<div class="contact-container">
    <h1>Contact</h1>
    <h3>Store Location Name</h3>
    <p>1234 Any Place Name, Some Place, Any State, 12345</p>
    <p>(123) 456 - 7890</p>
    <p>Sun - Sat: 11am - 8pm</p>
    </div>`;

    content.appendChild(contact);


})();

export { renderContact };