// JavaScript for adding a product to the cart
  
  // Get the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

  // Add event listeners to the buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  // Function to add a product to the cart
  function addToCart(event) {
    // Prevent the default button behavior
    event.preventDefault();

    // Get the product ID from the button's data attribute
    const productId = event.target.getAttribute('data-product-id');

    // Send a request to the server to add the product to the cart
    fetch(`/add-to-cart.php?productId=${productId}`)
      .then(response => {
        // Handle the response from the server
        if (response.ok) {
          alert('Product added to cart!');
        } else {
          alert('Error adding product to cart.');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Error adding product to cart.');
      });
  }