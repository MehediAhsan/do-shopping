let watch = {
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Watch',
    price: 112
}
let headphone = {
    image: 'https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Head Phone',
    price: 112
}
let keyboard = {
    image: 'https://images.unsplash.com/photo-1561112077-7b6f1d8cc0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title: 'Keyboard',
    price: 112
}
let shirt = {
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Shirt',
    price: 105
}
let table = {
    image: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    title: 'Table',
    price: 120
}
let chair = {
    image: 'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title: 'Chair',
    price: 110
}
let fan = {
    image: 'https://images.unsplash.com/photo-1555470100-1728256970aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Fan',
    price: 130
}

const productArray = [watch, headphone, keyboard, shirt, table, chair, fan];

function displayProducts(product){
    const cardBody = document.getElementById('card-body');
    const card = document.createElement('div');
    card.classList.add('card','card-compact','bg-base-100','shadow-xl')
    card.innerHTML = `
    <figure><img class="h-44 w-full" src="${product.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${product.title}</h2>
      <p>Price: $<span>${product.price}</span></p>
      <div class="card-actions justify-end">
        <button class="buy-btn btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    cardBody.appendChild(card);
}

function displayAllProducts(arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      displayProducts(element);
    }
}
  
displayAllProducts(productArray);

let count = 1;
let totalPrice = 0;
const buttons = document.getElementsByClassName('buy-btn')
for(const button of buttons){
    button.addEventListener('click', function(event){
        const productTitle = event.target.parentNode.parentNode.children[0].innerText;
        const productPrice = event.target.parentNode.parentNode.children[1].children[0].innerText;
        const tableBody = document.getElementById('table-body');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${count++}</th>
            <td>${productTitle}</td>
            <td>$<span>${productPrice}</span></td>
        `
        tableBody.appendChild(tr);
        totalPrice += parseFloat(productPrice);
        document.getElementById('total-price').innerText = totalPrice;
    })
}