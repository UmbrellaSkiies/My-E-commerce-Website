// Get a reference to the "Add to cart" button(s)
var addToCartButton = document.querySelector('input[type="submit"][value="Add to cart"]');

// Add an event listener to the button(s)
addToCartButton.addEventListener('click', function() {
  // Get the current number of items in the cart (from localStorage, for example)
  var cartItemCount = localStorage.getItem('cartItemCount') || 0;
  
  // Increment the cart item count
  cartItemCount++;
  
  // Update the cart link text with the new item count
  var cartLink = document.getElementById('cart-link');
  cartLink.textContent = 'Cart (' + cartItemCount + ')';
  
  // Store the updated cart item count in localStorage
  localStorage.setItem('cartItemCount', cartItemCount);
});