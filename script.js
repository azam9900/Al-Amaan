document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading delay
    setTimeout(function() {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // Initialize cart
    let cart = [];
    
    // Shop button functionality
    const shopBtn = document.querySelector('.shop-btn');
    if (shopBtn) {
        shopBtn.addEventListener('click', function() {
            document.querySelector('.products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;
            
            // Add to cart
            cart.push({
                name: productName,
                price: productPrice
            });
            
            // Show confirmation
            alert(`Added ${productName} (${productPrice}) to your cart\n\nTotal items: ${cart.length}`);
        });
    });

    console.log('Al Amman Perfumes website loaded');
    console.log('Admin: Mohd Azam');
});
