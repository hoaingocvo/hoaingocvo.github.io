document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    var cart = [];
    var menuBtn = document.querySelector('.menu-btn');
    var menuOverlay = document.querySelector('.menu-overlay');
    var aboutMePanel = document.getElementById('about-me-panel');

   // Function to open the cart popup
function openCartPopup() {
    var popup = document.getElementById('cart-popup');
    var cartList = document.getElementById('cart-list');
    var cartCount = document.getElementById('cart-count');

    cartList.innerHTML = ''; // Clear previous cart items
    cart.forEach(function(item, index) {
        var li = document.createElement('li');
        var productIcon = document.createElement('img'); // Create img element
        productIcon.src = getProductIcon(item); // Get product icon URL
        productIcon.classList.add('product-icon'); // Add class for styling
        li.appendChild(productIcon); // Append product icon to list item

        // Append product name as text content
        li.appendChild(document.createTextNode(item));

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.dataset.index = index;
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    cartCount.textContent = cart.length;
    popup.style.display = 'block';
}

function getProductIcon(productName) {
    var productNameWithoutSpaces = productName.replace(/\s+/g, ''); // Remove spaces
    var iconURL = productNameWithoutSpaces.toLowerCase() + '-image1.JPG'; // Assuming first image for each product
    return iconURL;
}

// Example product names
var productNames = [
    "product1",
    "product2",
    "Product3",
    "Product4",
    "Product5",
    "Product6",
    "Product7",
    "Product8",
    "Product9",
    "Product10",
    "Product11",
    "Product12"
];

// Gene rate icon paths for each product
var productIcons = productNames.map(getProductIcon);

console.log(productIcons);


// Function to close the cart popup
function closeCartPopup() {
    var popup = document.getElementById('cart-popup');
    popup.style.display = 'none';
}

    // Add click event listener to each item's "Add to Cart" button
    items.forEach(function(item) {
        var addToCartButton = item.querySelector('button');
        addToCartButton.addEventListener('click', function() {
            var itemName = item.querySelector('h2').textContent;
            cart.push(itemName);
            openCartPopup();
        });
    });

    // Add click event listener to remove buttons in the cart popup
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove')) {
            var itemIndex = event.target.dataset.index;
            if (itemIndex !== undefined) {
                cart.splice(itemIndex, 1);
                openCartPopup();
            }
        } else if (event.target.id === 'cart-close') {
            closeCartPopup();
        }

        // Handle menu button click
        if (event.target === menuBtn) {
            var menuOverlayStyle = window.getComputedStyle(menuOverlay);
            if (menuOverlayStyle.right === '0px') {
                menuOverlay.style.right = '-300px';
            } else {
                menuOverlay.style.right = '0px';
            }
        }
    });

    // Handle menu overlay click
    menuOverlay.addEventListener('click', function(event) {
        if (event.target === this) {
            menuOverlay.style.right = '-300px';
        }
    });


    document.addEventListener('DOMContentLoaded', function() {
        var menuBtn = document.querySelector('.menu-btn');
        var menuOverlay = document.querySelector('.menu-overlay');
        var menuContent = document.querySelector('.menu-content');
    
        // Handle click on menu button
        if (menuBtn && menuOverlay) {
            menuBtn.addEventListener('click', function(event) {
                event.preventDefault();
                menuOverlay.style.right = (menuOverlay.style.right === "0px") ? "-300px" : "0px";
                toggleMenuContent(); // Call function to toggle menu content rolling
            });
        }
    
        // Function to toggle menu content rolling
        function toggleMenuContent() {
            menuContent.classList.toggle("roll"); // Toggle the roll class
        }
    });
    
// Function to show all panels
function showAllPanels() {
    var panels = document.querySelectorAll('.panel');
    panels.forEach(function(panel) {
        panel.style.display = "block";
    });
    var paragraphBoxes = document.querySelectorAll('.paragraph-box');
    paragraphBoxes.forEach(function(box) {
        box.style.display = "block";
    });
}


    // Add event listener to the buy now button
    var buyNowBtn = document.getElementById('buy-now-btn-cart');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            var checkoutSection = document.getElementById('checkout-section');
            if (checkoutSection) {
                checkoutSection.style.display = 'block';
            }
        });
    }

    // Add event listener to the checkout close button
    var checkoutCloseBtn = document.getElementById('checkout-close');
    if (checkoutCloseBtn) {
        checkoutCloseBtn.addEventListener('click', function() {
            var checkoutSection = document.getElementById('checkout-section');
            if (checkoutSection) {
                checkoutSection.style.display = 'none';
            }
        });
    }

    // Add event listeners for left and right arrows in each product item
    items.forEach(function(item) {
        var leftArrow = item.querySelector('.left-arrow');
        var rightArrow = item.querySelector('.right-arrow');
        var imageContainer = item.querySelector('.image-container');
        var images = imageContainer.querySelectorAll('img');
        var currentIndex = 0;

        function showImage(index) {
            images.forEach(function(image) {
                image.style.display = 'none';
            });
            images[index].style.display = 'block';
            currentIndex = index;
        }

        showImage(0);

        leftArrow.addEventListener('click', function() {
            var newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
            showImage(newIndex);
        });

        rightArrow.addEventListener('click', function() {
            var newIndex = currentIndex + 1;
            if (newIndex >= images.length) {
                newIndex = 0;
            }
            showImage(newIndex);
        });
    });
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})