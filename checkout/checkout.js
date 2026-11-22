// Checkout JavaScript - Payment Processing

let selectedProduct = null;
let currentTheme = localStorage.getItem('theme') || 'light';

document.addEventListener('DOMContentLoaded', () => {
    // Load selected product from session storage
    const productData = sessionStorage.getItem('selectedProduct');
    if (productData) {
        selectedProduct = JSON.parse(productData);
        renderCart();
    } else {
        // No product selected, redirect to products
        window.location.href = '../index.html';
    }

    setupEventListeners();
    applyTheme();
});

// Render Cart
function renderCart() {
    const cartItem = document.getElementById('cartItem');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (selectedProduct) {
        const subtotal = selectedProduct.price;
        const tax = subtotal * 0.0825; // Tax rate
        const total = subtotal + tax;

        cartItem.innerHTML = `
            <div class="cart-product">
                <h3>${selectedProduct.title}</h3>
                <p class="cart-desc">${selectedProduct.description}</p>
                <span class="cart-price">$${selectedProduct.price.toFixed(2)}</span>
            </div>
        `;

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        taxEl.textContent = `$${tax.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    }
}

// Payment Processing
function processPayment() {
    const email = document.getElementById('email').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    // Show confirmation
    showConfirmation(email, paymentMethod);
}

// Show Confirmation
function showConfirmation(email, paymentMethod) {
    const cartItem = document.getElementById('cartItem');

    cartItem.innerHTML = `
        <div class="confirmation-content">
            <div class="checkmark">✓</div>
            <h2>Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod === 'stripe' ? 'Stripe Card' : 'PayPal'}</p>
            <p class="download-info">
                Your download link will be sent to your email within 5 minutes.<br>
                You can also access your purchases in your account dashboard.
            </p>
            <a href="../index.html" class="btn btn-primary">Continue Shopping</a>
        </div>
    `;

    // Hide payment button
    document.querySelector('.payment-form').style.display = 'none';

    // Send download link (simulated)
    setTimeout(() => {
        console.log(`Download link sent to ${email}`);
        // In production: Integrate with Stripe/PayPal webhooks
        // to send actual download emails
    }, 1000);
}

// Event Listeners
function setupEventListeners() {
    document.getElementById('payButton').addEventListener('click', processPayment);
}

// Theme Support
function applyTheme() {
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Clear cart after purchase
window.clearCart = function() {
    sessionStorage.removeItem('selectedProduct');
};