document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading delay
    setTimeout(function() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
    
    // Initialize cart from localStorage or empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            
            // Check if product already in cart
            const existingProductIndex = cart.findIndex(item => item.name === productName);
            if (existingProductIndex !== -1) {
                // Increase quantity
                cart[existingProductIndex].quantity += 1;
            } else {
                // Add new product with quantity 1
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            
            // Save cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Show confirmation
            alert(`Added ${productName} (₹${productPrice}) to your cart\n\nTotal items: ${cart.reduce((acc, item) => acc + item.quantity, 0)}`);
        });
    });

    console.log('Al Amman Perfumes website loaded');
    console.log('Admin: Mohd Azam');
});
