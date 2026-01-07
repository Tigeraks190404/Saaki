// Product Data
const products = [
    {
        id: 1,
        name: "Macallan 18 Year Old",
        category: "whiskey",
        price: 299.99,
        description: "Aged single malt scotch whiskey with rich, complex flavors of dried fruit, spice, and oak",
        emoji: "🥃",
        volume: "750ml",
        abv: "43%"
    },
    {
        id: 2,
        name: "Grey Goose Vodka",
        category: "vodka",
        price: 39.99,
        description: "Premium French vodka, smooth and refined with subtle citrus notes",
        emoji: "🍸",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 3,
        name: "Bacardi Superior Rum",
        category: "rum",
        price: 24.99,
        description: "Classic white rum, perfect for cocktails with clean, crisp finish",
        emoji: "🍹",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 4,
        name: "Tanqueray London Dry Gin",
        category: "gin",
        price: 32.99,
        description: "Premium gin with juniper, coriander, and citrus botanical notes",
        emoji: "🍸",
        volume: "750ml",
        abv: "47.3%"
    },
    {
        id: 5,
        name: "Patrón Silver Tequila",
        category: "tequila",
        price: 49.99,
        description: "Premium 100% agave tequila. 750ml | 40% ABV",
        emoji: "🍾",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 6,
        name: "Dom Pérignon Champagne",
        category: "wine",
        price: 199.99,
        description: "Luxury champagne with fine bubbles and notes of white fruit and brioche",
        emoji: "🍾",
        volume: "750ml",
        abv: "12.5%"
    },
    {
        id: 7,
        name: "Johnnie Walker Blue Label",
        category: "whiskey",
        price: 249.99,
        description: "Rare and exceptional blended scotch with honey, vanilla, and smoke",
        emoji: "🥃",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 8,
        name: "Belvedere Vodka",
        category: "vodka",
        price: 44.99,
        description: "Polish luxury vodka, ultra-smooth with subtle vanilla and cream notes",
        emoji: "🍸",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 9,
        name: "Captain Morgan Spiced Rum",
        category: "rum",
        price: 22.99,
        description: "Spiced rum with vanilla, cinnamon, and nutmeg spice notes",
        emoji: "🍹",
        volume: "750ml",
        abv: "35%"
    },
    {
        id: 10,
        name: "Hendrick's Gin",
        category: "gin",
        price: 36.99,
        description: "Scottish gin with cucumber and rose. 750ml | 44% ABV",
        emoji: "🍸",
        volume: "750ml",
        abv: "44%"
    },
    {
        id: 11,
        name: "Don Julio 1942",
        category: "tequila",
        price: 149.99,
        description: "Ultra-premium añejo tequila aged 2.5 years with caramel and oak notes",
        emoji: "🍾",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 12,
        name: "Château Margaux",
        category: "wine",
        price: 599.99,
        description: "Bordeaux first growth wine with complex black fruit and earthy notes",
        emoji: "🍷",
        volume: "750ml",
        abv: "13%"
    },
    {
        id: 13,
        name: "Jameson Irish Whiskey",
        category: "whiskey",
        price: 28.99,
        description: "Smooth triple-distilled Irish whiskey with honey and vanilla notes",
        emoji: "🥃",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 14,
        name: "Absolut Vodka",
        category: "vodka",
        price: 26.99,
        description: "Swedish vodka, clean and crisp. 750ml | 40% ABV",
        emoji: "🍸",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 15,
        name: "Mount Gay Rum",
        category: "rum",
        price: 29.99,
        description: "Barbados rum, rich and full-bodied with toffee and spice complexity",
        emoji: "🍹",
        volume: "750ml",
        abv: "43%"
    },
    {
        id: 16,
        name: "Bombay Sapphire",
        category: "gin",
        price: 29.99,
        description: "London dry gin with 10 botanicals. 750ml | 47% ABV",
        emoji: "🍸",
        volume: "750ml",
        abv: "47%"
    },
    {
        id: 17,
        name: "Casamigos Tequila",
        category: "tequila",
        price: 54.99,
        description: "Smooth, handcrafted tequila. 750ml | 40% ABV",
        emoji: "🍾",
        volume: "750ml",
        abv: "40%"
    },
    {
        id: 18,
        name: "Opus One",
        category: "wine",
        price: 349.99,
        description: "Napa Valley cabernet sauvignon with blackcurrant, cedar, and tobacco",
        emoji: "🍷",
        volume: "750ml",
        abv: "14.5%"
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    checkoutBtn.addEventListener('click', handleCheckout);

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Smooth scroll to section
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#categories') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderProducts();
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    mainNav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
}

// Search Functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        // Filter products by search term
        const filteredProducts = products.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
        
        // Update filter to show search results
        currentFilter = 'all';
        filterButtons.forEach(b => b.classList.remove('active'));
        
        // Render filtered products
        renderSearchResults(filteredProducts, searchTerm);
        showNotification(`Found ${filteredProducts.length} result(s) for "${searchTerm}"`);
    } else {
        renderProducts();
    }
}

// Render Search Results
function renderSearchResults(filteredProducts, searchTerm) {
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="font-size: 1.2rem; color: #666;">No products found for "${searchTerm}"</p>
                <button onclick="renderProducts(); searchInput.value='';" 
                        style="margin-top: 1rem; padding: 0.7rem 1.5rem; background: var(--primary-color); 
                        color: white; border: none; border-radius: 8px; cursor: pointer;">
                    Show All Products
                </button>
            </div>
        `;
    } else {
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">${product.emoji}</div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-specs">
                        ${product.volume ? `<span class="spec">${product.volume}</span>` : ''}
                        ${product.abv ? `<span class="spec">${product.abv} ABV</span>` : ''}
                    </div>
                    <div class="product-footer">
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Render Products
function renderProducts() {
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-specs">
                    ${product.volume ? `<span class="spec">${product.volume}</span>` : ''}
                    ${product.abv ? `<span class="spec">${product.abv} ABV</span>` : ''}
                </div>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    cartTotal.textContent = getCartTotal().toFixed(2);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = getCartTotal();
    const confirmMessage = `Proceed to checkout with ${cart.reduce((sum, item) => sum + item.quantity, 0)} items?\n\nTotal: $${total.toFixed(2)}`;
    
    if (confirm(confirmMessage)) {
        alert('Thank you for your order with Saaki! Your order has been received. You will receive a confirmation email shortly. This is a demo website - in a production environment, you would be redirected to secure payment processing.');
        cart = [];
        saveCart();
        updateCartUI();
        closeCartSidebar();
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

