// Navbar, Search Form, and Cart Toggle Functionality
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

// Cart Functionality
const addToCartButtons = document.querySelectorAll('.menu .btn1, .btn2, .btn3, .btn4, .products .btn5, .btn6, .btn7, .btn8');
const cartContainer = document.querySelector('.cart-items-container');
const cartItems = [];

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const itemBox = event.target.closest('.box');
        const itemName = itemBox.querySelector('h3').innerText;
        const itemPrice = itemBox.querySelector('.price').childNodes[0].nodeValue.trim();
        const itemImgSrc = itemBox.querySelector('img').src;

        addToCart(itemName, itemPrice, itemImgSrc);
    });
});

function addToCart(name, price, imgSrc) {
    const existingItem = cartItems.find((item) => item.name === name);

    if (!existingItem) {
        const item = { name, price, imgSrc };
        cartItems.push(item);
        updateCartUI();
    } else {
        alert('Item already in the cart!');
    }
}

function updateCartUI() {
    cartContainer.innerHTML = '';

    cartItems.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <span class="fas fa-times" onclick="removeFromCart('${item.name}')"></span>
            <img src="${item.imgSrc}" alt="${item.name}">
            <div class="content">
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    const checkoutButton = document.createElement('a');
    checkoutButton.href = '#';
    checkoutButton.classList.add('btn');
    checkoutButton.innerText = 'Checkout Now';
    checkoutButton.addEventListener('click', redirectToCheckout);

    cartContainer.appendChild(checkoutButton);
}

function removeFromCart(name) {
    const index = cartItems.findIndex((item) => item.name === name);
    if (index !== -1) {
        cartItems.splice(index, 1);
        updateCartUI();
    }
}

function redirectToCheckout(event) {
    event.preventDefault();
    window.location.href = 'checkout.html';
    const checkoutPage = document.createElement('div');
    checkoutPage.classList.add('checkout-page');
  

    document.body.innerHTML = '';
    document.body.appendChild(checkoutPage);

    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', redirectToThankYouPage);
}

function redirectToThankYouPage(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const contactNumber = document.getElementById('contactNumber').value;

    if (fullName && address && contactNumber) {
        document.body.innerHTML = `
            <div class="thank-you-page">
                <h1>Thank You!</h1>
                <p>Your order is being processed. Please open your lines for further updates.</p>
            </div>
        `;
    } else {
        alert('Please fill out all the fields.');
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    if (name && email && number) {
        // If all fields are filled, show the thank you message
        alert(`Thank you for contacting Tao Milktea, ${name}!`);

        // Redirect to a thank you page (or you can redirect to a new section in the same page)
        window.location.href = 'thank-you.html'; // Replace with the actual URL or path to the thank you page
    } else {
        alert('Please fill out all the fields.');
    }
});

