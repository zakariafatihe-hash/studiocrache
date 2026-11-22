// StudioCrache Main JavaScript

// Sample Products Data - Using placeholder images (replace with real images later)
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
    loadProducts();
    setupThemeToggle();
    setupEventListeners();

    // Set current year in footer
    document.querySelector('.footer-bottom p').innerHTML =
        `&copy; ${new Date().getFullYear()} StudioCrache. All rights reserved.`;
});

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

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category.toLowerCase());

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-img" onerror="this.src='assets/img/placeholder.png'">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="product-rating">
                <span class="rating-stars">★★★★★</span>
                <span class="rating-value">(${product.rating})</span>
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button onclick="buyProduct(${product.id})">Buy Now</button>
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
}

// Buy Product Function
function buyProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Store selected product in session storage for checkout
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'checkout/payment.html';
    }
}

// Export for global access
window.buyProduct = buyProduct;