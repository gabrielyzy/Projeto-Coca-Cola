document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('cart-button');
    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');

    let cartItemsArray = [];

    cartButton.addEventListener('click', function () {
        cart.classList.toggle('hidden');
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cartItemsArray.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="quantity">${cartItemsArray.filter(i => i.name === item.name).length}x</span> ${item.name} - R$ ${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
    

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.parentElement.querySelector('h2').textContent;
            const price = parseFloat(this.getAttribute('data-price'));
            cartItemsArray.push({ name, price });
            updateCart();
        });
    });

    checkoutButton.addEventListener('click', function () {
        alert('Compra finalizada! Obrigado por comprar na Loja Coca-Cola.');
        cartItemsArray = [];
        updateCart();
        cart.classList.add('hidden');
    });
});


