// Checkout JavaScript - Payment Processing

let selectedProduct = null;
let currentTheme = localStorage.getItem('theme') || 'light';
let i18n;

// Load i18n
if (window.i18n) {
    i18n = window.i18n;
} else {
    // Fallback i18n object
    i18n = {
        t: (key, params = {}) => key,
        translateElement: (el, key) => {
            if (el.dataset.i18n) {
                el.textContent = i18n.t(key);
            }
        }
    };
}

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

    // Apply translations
    applyTranslations();

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
                <h3>${i18n ? i18n.t('product.files_included') : 'Files Included'}</h3>
                <p class="cart-desc">${selectedProduct.title}</p>
                <span class="cart-price">${i18n ? i18n.t('product.description') : 'Description'}: ${selectedProduct.description}</span>
                <span class="cart-price">${selectedProduct.price.toFixed(2)}</span>
            </div>
        `;

        subtotalEl.textContent = `${i18n ? i18n.t('checkout.subtotal') : 'Subtotal'} $${subtotal.toFixed(2)}`;
        taxEl.textContent = `${i18n ? i18n.t('checkout.tax') : 'Tax'} $${tax.toFixed(2)}`;
        totalEl.textContent = `${i18n ? i18n.t('checkout.total') : 'Total'} $${total.toFixed(2)}`;
    }
}

// Payment Processing
function processPayment() {
    const email = document.getElementById('email').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (!email) {
        alert(`${i18n ? i18n.t('msg.email_required') : 'Email is required'}`);
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
            <h2>${i18n ? i18n.t('checkout.success_title') : 'Thank You!'}</h2>
            <p>${i18n ? i18n.t('checkout.success_desc') : 'Your order has been placed successfully.'}</p>
            <p><strong>${i18n ? i18n.t('checkout.email') : 'Email':}</strong> ${email}</p>
            <p><strong>${i18n ? i18n.t('checkout.payment_method') : 'Payment Method':}</strong> ${paymentMethod === 'paypal' ? 'PayPal' : 'Stripe Card'}</p>
            <p class="download-info">
                ${i18n ? i18n.t('checkout.download_info') : 'Your download link will be sent to your email within 5 minutes.'}
            </p>
            <a href="../index.html" class="btn btn-primary">${i18n ? i18n.t('checkout.continue_shopping') : 'Continue Shopping'}</a>
        </div>
    `;

    // Hide payment button
    document.querySelector('.payment-form').style.display = 'none';

    // Send download link (simulated)
    setTimeout(() => {
        console.log(`${i18n ? i18n.t('msg.payment_success') : 'Payment successful!'}: ${email}`);
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

// Export for global access
window.clearCart = function() {
    sessionStorage.removeItem('selectedProduct');
};