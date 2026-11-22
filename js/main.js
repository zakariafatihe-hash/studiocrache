// StudioCrache Main JavaScript - With Shopping Cart

// Initialize i18n
const i18nScript = document.createElement('script');
i18nScript.src = 'js/i18n.js';
i18nScript.defer = true;
document.head.appendChild(i18nScript);

// Wait for i18n to load
let i18n;
let cart = []; // Shopping cart array
let currentProduct = null;

document.addEventListener('DOMContentLoaded', () => {
    if (window.i18n) {
        i18n = window.i18n;
    } else {
        i18n = {
            t: (key, params = {}) => key,
            setLanguage: () => {},
            applyTranslations: () => {},
            getCurrentLanguage: () => 'en'
        };
    }

    // Initialize cart from sessionStorage or create empty cart
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    } else {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    // Load products and apply translations
    initApp();
});

// Initialize application
function initApp() {
    applyInitialTranslations();
    loadProducts();
    setupEventListeners();
    updateCartCount();
    setupCartDropdown();
}

// Initialize theme from localStorage
function initThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

// Shopping Cart Functions
// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Check if product already in cart
        const existingIndex = cart.findIndex(p => p.id === productId);
        if (existingIndex >= 0) {
            cart[existingIndex].quantity++;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
                description: product.description
            });
        }
        // Save to sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showToast(`${i18n ? i18n.t('msg.added_to_cart') : 'Added to cart'}!`);
    }
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartSidebar();
    showToast('Removed from cart');
}

// Update cart count in UI
function updateCartCount() {
    const cartCount = document.querySelectorAll('.cart-count');
    cartCount.forEach(el => {
        el.textContent = cart.length;
    });
}

// Render cart sidebar
function renderCartSidebar() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (!cartSidebar) return;

    if (cart.length === 0) {
        cartSidebar.innerHTML = `
            <div class="empty-cart">
                ${i18n ? i18n.t('cart.empty') : 'Your cart is empty'}
                <button class="btn btn-secondary" onclick="clearCart()">${i18n ? i18n.t('cart.continue_shopping') : 'Continue Shopping'}</button>
            </div>
        `;
        return;
    }

    let total = 0;
    let html = `<ul class="cart-items">`;

    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <li class="cart-item">
                <span class="cart-item-name">${item.title}</span>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                <span class="cart-item-quantity">
                   Qty: <input type="number" min="1" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)" disabled>
                </span>
                <button class="btn btn-danger btn-small" onclick="removeFromCart(${item.id})">${i18n ? i18n.t('cart.remove') : 'Remove'}</button>
            </li>
        `;
    });

    html += `</ul>`;
    html += `<div class="cart-footer">
        <span>${i18n ? i18n.t('cart.total') : 'Total'}:</span>
        <strong>$${total.toFixed(2)}</strong>
        <button class="btn btn-primary btn-block" onclick="proceedToCheckout()">${i18n ? i18n.t('cart.checkout') : 'Proceed to Checkout'}</button>
    </div>`;

    cartSidebar.innerHTML = html;
}

// Update cart quantity
function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartSidebar();
    }
}

// Clear entire cart
function clearCart() {
    cart = [];
    sessionStorage.removeItem('cart');
    updateCartCount();
    renderCartSidebar();
    showToast('Cart cleared');
}

// Proceed to checkout with cart
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    // Store cart in session for checkout
    sessionStorage.setItem('cart', JSON.stringify(cart));
    // Redirect to checkout page
    window.location.href = 'checkout/payment.html';
}

// Show toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: white;
        padding: 12px 20px;
        border-radius: var(--border-radius);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slide-in 0.3s ease;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slide-in {
            from { transform: translateX(-50%) translateY(20px); opacity: 0; }
            to { transform: translateX(-50%); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Product Data
const products = [
    {
        id: 1,
        title: "Modern Web Dashboard Template",
        description: "Clean, responsive dashboard template built with HTML, CSS, and JavaScript",
        price: 29.99,
        image: "https://via.placeholder.com/720x400/3b82f6/ffffff?text=Dashboard+Template",
        category: "Templates",
        rating: 4.8
    },
    {
        id: 2,
        title: "Python Automation Scripts Pack",
        description: "5 ready-to-use automation scripts for file management, data processing, and web scraping",
        price: 24.99,
        image: "https://via.placeholder.com/720x400/10b981/ffffff?text=Python+Scripts",
        category: "Scripts",
        rating: 4.6
    },
    {
        id: 3,
        title: "Professional Social Media Icons Pack",
        description: "100+ SVG and PNG social media icons in multiple formats",
        price: 15.99,
        image: "https://via.placeholder.com/720x400/f59e0b/ffffff?text=Icons+Pack",
        category: "Graphics",
        rating: 4.9
    },
    {
        id: 4,
        title: "SEO Optimization Guide 2024",
        description: "Complete guide with checklists and templates for website SEO",
        price: 19.99,
        image: "https://via.placeholder.com/720x400/8b5cf6/ffffff?text=SEO+Guide",
        category: "Guides",
        rating: 4.7
    },
    {
        id: 5,
        title: "Excel Productivity Macros",
        description: "10 time-saving macros for Excel - automate repetitive tasks instantly",
        price: 12.99,
        image: "https://via.placeholder.com/720x400/ec4899/ffffff?text=Excel+Macros",
        category: "Tools",
        rating: 4.5
    },
    {
        id: 6,
        title: "Business Card Design Templates",
        description: "10 premium business card designs - editable in Canva and Photoshop",
        price: 9.99,
        image: "https://via.placeholder.com/720x400/06b6d4/ffffff?text=Business+Cards",
        category: "Templates",
        rating: 4.8
    },
    {
        id: 7,
        title: "React Component Library Starter",
        description: "Production-ready React component library starter with Storybook, testing, and CI/CD. Includes 20+ components with TypeScript.",
        price: 49.99,
        image: "https://via.placeholder.com/720x400/6366f1/ffffff?text=React+Library",
        category: "Code",
        rating: 4.9
    },
    {
        id: 8,
        title: "Notion Productivity Templates Pack",
        description: "15 Notion templates for project management, habit tracking, finance, content planning, and team collaboration.",
        price: 22.99,
        image: "https://via.placeholder.com/720x400/14b8a6/ffffff?text=Notion+Templates",
        category: "Templates",
        rating: 4.8
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const themeToggle = document.getElementById('themeToggle');
const viewDemo = document.getElementById('viewDemo');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (window.i18n) {
        i18n = window.i18n;
    } else {
        i18n = {
            t: (key, params = {}) => key,
            setLanguage: () => {},
            applyTranslations: () => {},
            getCurrentLanguage: () => 'en'
        };
    }

    applyInitialTranslations();
    loadProducts();
    setupThemeToggle();
    setupEventListeners();
    updateCartCount();

    // Set current year in footer
    document.querySelector('.footer-bottom p').innerHTML =
        `&copy; ${new Date().getFullYear()} StudioCrache. All rights reserved.`;
});

// Apply translations that are already in the DOM
function applyInitialTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n && i18n.t) {
            el.textContent = i18n.t(key);
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n && i18n.t) {
            el.placeholder = i18n.t(key);
        }
    });
}

// Load Products
function loadProducts() {
    const container = document.createElement('div');

    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });

    productsGrid.innerHTML = '';
    productsGrid.appendChild(container);
}

// Create Product Card with Add to Cart button
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category.toLowerCase());

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-img" onerror="this.src='https://via.placeholder.com/720x400/cccccc/ffffff?text=Product+Placeholder'">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="product-rating">
                <span class="rating-stars">★★★★★</span>
                <span class="rating-value">(${product.rating})</span>
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button onclick="addToCart(${product.id})" class="btn btn-primary">${i18n ? i18n.t('products.buy') : 'Add to Cart'}</button>
            </div>
        </div>
    `;

    return card;
}

// Theme Toggle
let currentTheme = localStorage.getItem('theme') || 'light';

function setupThemeToggle() {
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    }
}

// Event Listeners
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    viewDemo.addEventListener('click', () => {
        alert('Demo feature coming soon!');
    });

    // Add cart toggle for mobile
    const cartToggle = document.querySelector('.cart-toggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', () => {
            const cartSidebar = document.getElementById('cart-sidebar');
            if (cartSidebar) {
                cartSidebar.classList.toggle('active');
            }
        });
    }
}

// Export for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.proceedToCheckout = proceedToCheckout;
document.addEventListener('DOMContentLoaded', initApp);