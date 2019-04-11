export function add(product) {
    /**
     * Add a product item to the shopping list
     */

     const list = document.getElementById('shopping-list');

     // Create card element
     const card = document.createElement('div');
     card.className = 'list-item card m-3';

     // Create card image
     const cardImage = document.createElement('div');
     cardImage.className = 'view overlay';
     cardImage.innerHTML = `
        <img class="card-img-top" src="${product.image}" alt="${product.name}">
        <div class="mask rgba-white-slight"></div>
     `;

     // Create a card body
     const cardBody = document.createElement('div');
     cardBody.className = 'card-body';

     // Create card title
     const cardTitle = document.createElement('h5');
     cardTitle.className = 'card-title';
     cardTitle.innerText = product.name;

     // Create card text
     const cardText = document.createElement('p');
     cardText.className = 'card-text';
     cardText.innerHTML = `
        <h5 class="pink-text">${product.material}</h5>
        <span class="badge badge-secondary">${product.adjective}</span>
        <span class="badge badge-secondary">${product.price}</span>
     `;

     // Create card button
     const cardButton = document.createElement('button');
     cardButton.className = 'btn btn-unique btn-sm btn-block waves-effect waves-light ';
     cardButton.innerHTML = '<i class="fas fa-plus mr-2"></i> Add to cart';


     // Add card's title, text and button elements to card's body element
     cardBody.appendChild(cardTitle);
     cardBody.appendChild(cardText);
     cardBody.appendChild(cardButton);

     // Add card's image and body elements to the card element
     card.appendChild(cardImage);
     card.appendChild(cardBody);

     list.appendChild(card);
}