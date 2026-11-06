
// ==========================================
// BITEBOX - FOOD ORDERING WEBSITE
// ==========================================

//1. FOOD MENU
const foods = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 199,
        rating: 4.5,
        description: "Classic pizza with cheese and tomato.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500"
    },
    {
        id: 2,
        name: "Farmhouse Pizza",
        category: "Pizza",
        price: 299,
        rating: 4.8,
        description: "Loaded with fresh vegetables and cheese.",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500"
    },
    {
        id: 3,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 349,
        rating: 4.7,
        description: "Delicious pizza with pepperoni toppings.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500"
    },
    {
        id: 4,
        name: "Cheese Burst Pizza",
        category: "Pizza",
        price: 279,
        rating: 4.6,
        description: "Extra cheese inside every bite.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
    },
    {
        id: 5,
        name: "Veggie Pizza",
        category: "Pizza",
        price: 249,
        rating: 4.3,
        description: "Fresh vegetables with delicious cheese.",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500"
    },
    {
        id: 6,
        name: "Classic Burger",
        category: "Burger",
        price: 129,
        rating: 4.4,
        description: "Juicy burger with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
        id: 7,
        name: "Cheese Burger",
        category: "Burger",
        price: 159,
        rating: 4.7,
        description: "Burger loaded with melted cheese.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 8,
        name: "Chicken Burger",
        category: "Burger",
        price: 189,
        rating: 4.8,
        description: "Crispy chicken burger with special sauce.",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
    },
    {
        id: 9,
        name: "Double Patty Burger",
        category: "Burger",
        price: 219,
        rating: 4.6,
        description: "Two delicious patties with cheese.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500"
    },
    {
        id: 10,
        name: "Veg Burger",
        category: "Burger",
        price: 99,
        rating: 4.2,
        description: "Crispy vegetable patty with fresh salad.",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500"
    },
    {
        id: 11,
        name: "Paneer Butter Masala",
        category: "Indian",
        price: 249,
        rating: 4.8,
        description: "Paneer cooked in rich buttery gravy.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500"
    },
    {
        id: 12,
        name: "Chicken Biryani",
        category: "Indian",
        price: 220,
        rating: 4.9,
        description: "Aromatic rice with delicious chicken.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 13,
        name: "Veg Biryani",
        category: "Indian",
        price: 180,
        rating: 4.5,
        description: "Traditional vegetable biryani.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500"
    },
    {
        id: 14,
        name: "Masala Dosa",
        category: "Indian",
        price: 100,
        rating: 4.4,
        description: "Crispy dosa served with potato masala.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500"
    },
    {
        id: 15,
        name: "Butter Naan",
        category: "Indian",
        price: 45,
        rating: 4.3,
        description: "Soft naan topped with butter.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500"
    },
    {
        id: 16,
        name: "Chocolate Cake",
        category: "Dessert",
        price: 120,
        rating: 4.8,
        description: "Rich and soft chocolate cake.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
    },
    {
        id: 17,
        name: "Ice Cream",
        category: "Dessert",
        price: 80,
        rating: 4.5,
        description: "Creamy and delicious ice cream.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500"
    },
    {
        id: 18,
        name: "Brownie",
        category: "Dessert",
        price: 110,
        rating: 4.6,
        description: "Chocolate brownie with a soft centre.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
    },
    {
        id: 19,
        name: "Donut",
        category: "Dessert",
        price: 65,
        rating: 4.3,
        description: "Sweet donut with chocolate topping.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500"
    },
    {
        id: 20,
        name: "Cheesecake",
        category: "Dessert",
        price: 150,
        rating: 4.7,
        description: "Smooth and creamy cheesecake.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"
    },
    {
        id: 21,
        name: "Cold Coffee",
        category: "Drinks",
        price: 90,
        rating: 4.5,
        description: "Chilled coffee with creamy milk.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    },
    {
        id: 22,
        name: "Fresh Orange Juice",
        category: "Drinks",
        price: 70,
        rating: 4.4,
        description: "Freshly squeezed orange juice.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500"
    },
    {
        id: 23,
        name: "Mango Shake",
        category: "Drinks",
        price: 100,
        rating: 4.7,
        description: "Refreshing mango milkshake.",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500"
    },
    {
        id: 24,
        name: "Lemon Soda",
        category: "Drinks",
        price: 50,
        rating: 4.2,
        description: "Refreshing lemon soda.",
        image: "https://plus.unsplash.com/premium_photo-1721780793069-5576631f1b46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 25,
        name: "Strawberry Shake",
        category: "Drinks",
        price: 110,
        rating: 4.6,
        description: "Sweet strawberry milkshake.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
    }
];


// ==========================================
// 2. SELECT HTML ELEMENTS
// ==========================================

const foodGrid = document.getElementById("foodGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryList = document.getElementById("categoryList");
const noResults = document.getElementById("noResults");

const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

const subtotalElement = document.getElementById("subtotal");
const deliveryFeeElement = document.getElementById("deliveryFee");
const taxElement = document.getElementById("tax");
const grandTotalElement = document.getElementById("grandTotal");

const checkoutButton = document.getElementById("checkoutButton");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutTotal = document.getElementById("checkoutTotal");

const confirmationModal = document.getElementById("confirmationModal");
const confirmationOrderId = document.getElementById("confirmationOrderId");
const trackNewOrderBtn = document.getElementById("trackNewOrderBtn");
const continueShoppingBtn = document.getElementById("continueShoppingBtn");

const trackingForm = document.getElementById("trackingForm");
const trackingOrderId = document.getElementById("trackingOrderId");
const trackingMessage = document.getElementById("trackingMessage");
const trackingResult = document.getElementById("trackingResult");
const latestOrderBtn = document.getElementById("latestOrderBtn");
const advanceTrackingBtn = document.getElementById("advanceTrackingBtn");

const toast = document.getElementById("toast");


// ==========================================
// 3. APPLICATION DATA
// ==========================================

let cart = loadData("bitebox_cart_v1", []);
let orders = loadData("bitebox_orders_v1", []);

let selectedCategory = "All";
let currentTrackingOrder = null;

const deliveryCharge = 40;
const taxRate = 0.05;


// ==========================================
// 4. LOCAL STORAGE
// ==========================================

function loadData(key, defaultValue) {
    try {
        const savedData = localStorage.getItem(key);

        if (savedData === null) {
            return defaultValue;
        }

        const parsedData = JSON.parse(savedData);

        return Array.isArray(parsedData) ? parsedData : defaultValue;

    } catch (error) {
        console.error("Storage error:", error);
        return defaultValue;
    }
}


function saveData() {
    localStorage.setItem("bitebox_cart_v1", JSON.stringify(cart));
    localStorage.setItem("bitebox_orders_v1", JSON.stringify(orders));
}


// ==========================================
// 5. DISPLAY FOOD ITEMS
// ==========================================

function displayFoods(foodArray) {

    if (!foodGrid) return;

    foodGrid.innerHTML = "";

    if (foodArray.length === 0) {
        if (noResults) {
            noResults.hidden = false;
        }
        return;
    }

    if (noResults) {
        noResults.hidden = true;
    }

    foodArray.forEach(food => {

        const foodCard = document.createElement("div");

        foodCard.className = "food-card";

        foodCard.innerHTML = `
            <img
                src="${food.image}"
                alt="${food.name}"
                onerror="this.src='https://placehold.co/500x350?text=Food+Image'"
            >

            <div class="food-card-content">

                <h3>${food.name}</h3>

                <p>${food.description}</p>

                <div class="food-card-details">

                    <span>⭐ ${food.rating}</span>

                    <span>₹${food.price}</span>

                </div>

                <button
                    class="add-to-cart"
                    data-id="${food.id}"
                >
                    Add to Cart
                </button>

            </div>
        `;

        foodGrid.appendChild(foodCard);
    });
}


// ==========================================
// 6. SEARCH, CATEGORY AND SORT
// ==========================================

function filterAndSortFoods() {

    let filteredFoods = [...foods];

    // Category filter
    if (selectedCategory !== "All") {

        filteredFoods = filteredFoods.filter(food =>
            food.category === selectedCategory
        );
    }

    // Search filter
    const searchText = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    if (searchText !== "") {

        filteredFoods = filteredFoods.filter(food =>
            food.name.toLowerCase().includes(searchText) ||
            food.description.toLowerCase().includes(searchText)
        );
    }

    // Sorting
    const sortValue = sortSelect ? sortSelect.value : "default";

    if (sortValue === "low") {
        filteredFoods.sort((a, b) => a.price - b.price);
    }

    else if (sortValue === "high") {
        filteredFoods.sort((a, b) => b.price - a.price);
    }

    else if (sortValue === "rating") {
        filteredFoods.sort((a, b) => b.rating - a.rating);
    }

    displayFoods(filteredFoods);
}


// ==========================================
// 7. ADD FOOD TO CART
// ==========================================

function addToCart(foodId) {

    const food = foods.find(item => item.id === foodId);

    if (!food) return;

    const existingItem = cart.find(item => item.id === foodId);

    if (existingItem) {
        existingItem.quantity++;
    }

    else {
        cart.push({
            ...food,
            quantity: 1
        });
    }

    saveData();
    updateCart();

    showToast(food.name + " added to cart!");
}


// ==========================================
// 8. UPDATE CART
// ==========================================

function updateCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach(item => {

        const quantity = Number(item.quantity) || 0;
        const price = Number(item.price) || 0;

        totalItems += quantity;
        subtotal += price * quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                onerror="this.src='https://placehold.co/100x100?text=Food'"
            >

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>₹${price}</p>

                <div class="cart-item-actions">

                    <button
                        class="decrease-quantity"
                        data-id="${item.id}"
                    >−</button>

                    <span>${quantity}</span>

                    <button
                        class="increase-quantity"
                        data-id="${item.id}"
                    >+</button>

                    <button
                        class="remove-item"
                        data-id="${item.id}"
                    >Remove</button>

                </div>

            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    const delivery = subtotal === 0 || subtotal >= 500
        ? 0
        : deliveryCharge;

    const tax = subtotal * taxRate;

    const grandTotal = subtotal + delivery + tax;

    if (cartCount) cartCount.textContent = totalItems;

    if (subtotalElement) {
        subtotalElement.textContent = "₹" + subtotal.toFixed(2);
    }

    if (deliveryFeeElement) {
        deliveryFeeElement.textContent = "₹" + delivery.toFixed(2);
    }

    if (taxElement) {
        taxElement.textContent = "₹" + tax.toFixed(2);
    }

    if (grandTotalElement) {
        grandTotalElement.textContent = "₹" + grandTotal.toFixed(2);
    }

    if (checkoutTotal) {
        checkoutTotal.textContent = "₹" + grandTotal.toFixed(2);
    }

    if (checkoutButton) {
        checkoutButton.disabled = cart.length === 0;
    }

    saveData();
}


// ==========================================
// 9. CHANGE CART QUANTITY
// ==========================================

function changeQuantity(foodId, change) {

    const item = cart.find(item => item.id === foodId);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== foodId);
    }

    saveData();
    updateCart();
}


// ==========================================
// 10. REMOVE CART ITEM
// ==========================================

function removeCartItem(foodId) {

    cart = cart.filter(item => item.id !== foodId);

    saveData();
    updateCart();

    showToast("Item removed from cart");
}


// ==========================================
// 11. OPEN AND CLOSE CART
// ==========================================

function openCartDrawer() {

    if (cartDrawer) cartDrawer.classList.add("active");

    if (cartOverlay) cartOverlay.classList.add("active");
}


function closeCartDrawer() {

    if (cartDrawer) cartDrawer.classList.remove("active");

    if (cartOverlay) cartOverlay.classList.remove("active");
}


// ==========================================
// 12. CHECKOUT MODAL
// ==========================================

function openCheckoutModal() {

    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }

    closeCartDrawer();

    if (checkoutModal) {
        checkoutModal.hidden = false;
        checkoutModal.classList.add("active");
    }
}


function closeCheckoutModal() {

    if (checkoutModal) {
        checkoutModal.hidden = true;
        checkoutModal.classList.remove("active");
    }
}


// ==========================================
// 13. PLACE ORDER
// ==========================================

function placeOrder(event) {

    event.preventDefault();

    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }

    const customerName = document.getElementById("customerName");
    const customerPhone = document.getElementById("customerPhone");
    const customerAddress = document.getElementById("customerAddress");
    const paymentMethod = document.getElementById("paymentMethod");

    if (!customerName || !customerPhone || !customerAddress || !paymentMethod) {
        showToast("Checkout form is incomplete.");
        return;
    }

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const delivery = subtotal >= 500 ? 0 : deliveryCharge;
    const tax = subtotal * taxRate;
    const total = subtotal + delivery + tax;

    const orderId = "BB" + Date.now().toString().slice(-8);

    const newOrder = {

        id: orderId,

        customer: customerName.value.trim(),

        phone: customerPhone.value.trim(),

        address: customerAddress.value.trim(),

        payment: paymentMethod.value,

        items: [...cart],

        total: total,

        status: 0,

        createdAt: new Date().toLocaleString(),

        updatedAt: new Date().toLocaleString()

    };

    orders.push(newOrder);

    localStorage.setItem(
        "bitebox_latest_order_v1",
        orderId
    );

    cart = [];

    saveData();
    updateCart();

    closeCheckoutModal();

    if (checkoutForm) checkoutForm.reset();

    if (confirmationOrderId) {
        confirmationOrderId.textContent = orderId;
    }

    if (confirmationModal) {
        confirmationModal.hidden = false;
        confirmationModal.classList.add("active");
    }
}


// ==========================================
// 14. CLOSE CONFIRMATION MODAL
// ==========================================

function closeConfirmationModal() {

    if (confirmationModal) {
        confirmationModal.hidden = true;
        confirmationModal.classList.remove("active");
    }
}


// ==========================================
// 15. ORDER TRACKING
// ==========================================

const trackingStages = [
    "Order Confirmed",
    "Preparing Your Food",
    "Out for Delivery",
    "Delivered"
];


function showTracking(orderId) {

    const order = orders.find(item =>
        item.id.toLowerCase() === orderId.toLowerCase().trim()
    );

    if (!order) {

        if (trackingMessage) {
            trackingMessage.textContent = "Order not found. Please check your order ID.";
        }

        if (trackingResult) {
            trackingResult.hidden = true;
        }

        return;
    }

    currentTrackingOrder = order;

    if (trackingMessage) {
        trackingMessage.textContent = "";
    }

    if (trackingResult) {
        trackingResult.hidden = false;
    }

    document.getElementById("displayOrderId").textContent = order.id;
    document.getElementById("trackingCustomer").textContent = order.customer;
    document.getElementById("trackingTotal").textContent = "₹" + order.total.toFixed(2);
    document.getElementById("trackingAddress").textContent = order.address;
    document.getElementById("trackingStatusBadge").textContent =
        trackingStages[order.status];

    document.getElementById("trackingUpdated").textContent =
        "Last updated: " + order.updatedAt;

    // Update tracking timeline
    const steps = document.querySelectorAll(".tracking-step");

    steps.forEach((step, index) => {

        step.classList.remove("completed", "active");

        if (index < order.status) {
            step.classList.add("completed");
        }

        else if (index === order.status) {
            step.classList.add("active");
        }
    });

    if (advanceTrackingBtn) {
        advanceTrackingBtn.disabled = order.status >= 3;
        advanceTrackingBtn.textContent =
            order.status >= 3 ? "Order Delivered" : "Advance Demo Status";
    }
}


// ==========================================
// 16. ADVANCE TRACKING STATUS
// ==========================================

function advanceTracking() {

    if (!currentTrackingOrder) return;

    if (currentTrackingOrder.status >= 3) {
        showToast("Your order has been delivered!");
        return;
    }

    currentTrackingOrder.status++;

    currentTrackingOrder.updatedAt = new Date().toLocaleString();

    saveData();

    showTracking(currentTrackingOrder.id);

    showToast("Order status updated!");
}


// ==========================================
// 17. TRACK LATEST ORDER
// ==========================================

function trackLatestOrder() {

    const latestOrderId = localStorage.getItem(
        "bitebox_latest_order_v1"
    );

    if (!latestOrderId) {
        showToast("You have not placed an order yet.");
        return;
    }

    if (trackingOrderId) {
        trackingOrderId.value = latestOrderId;
    }

    showTracking(latestOrderId);

    document.getElementById("tracking").scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// 18. TOAST MESSAGE
// ==========================================

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// ==========================================
// 19. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });
}


// ==========================================
// 20. EVENT LISTENERS
// ==========================================

// Search
if (searchInput) {
    searchInput.addEventListener("input", filterAndSortFoods);
}

// Sorting
if (sortSelect) {
    sortSelect.addEventListener("change", filterAndSortFoods);
}

// Category buttons
if (categoryList) {

    categoryList.addEventListener("click", event => {

        const button = event.target.closest("[data-category]");

        if (!button) return;

        selectedCategory = button.dataset.category;

        categoryList.querySelectorAll("[data-category]").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterAndSortFoods();
    });
}

// Add to cart
if (foodGrid) {

    foodGrid.addEventListener("click", event => {

        const button = event.target.closest(".add-to-cart");

        if (!button) return;

        addToCart(Number(button.dataset.id));
    });
}

// Cart quantity and remove buttons
if (cartItems) {

    cartItems.addEventListener("click", event => {

        const button = event.target.closest("button");

        if (!button) return;

        const foodId = Number(button.dataset.id);

        if (button.classList.contains("increase-quantity")) {
            changeQuantity(foodId, 1);
        }

        else if (button.classList.contains("decrease-quantity")) {
            changeQuantity(foodId, -1);
        }

        else if (button.classList.contains("remove-item")) {
            removeCartItem(foodId);
        }
    });
}

// Cart open and close
if (cartButton) {
    cartButton.addEventListener("click", openCartDrawer);
}

if (closeCart) {
    closeCart.addEventListener("click", closeCartDrawer);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartDrawer);
}

// Checkout
if (checkoutButton) {
    checkoutButton.addEventListener("click", openCheckoutModal);
}

if (closeCheckout) {
    closeCheckout.addEventListener("click", closeCheckoutModal);
}

if (checkoutForm) {
    checkoutForm.addEventListener("submit", placeOrder);
}

// Confirmation modal
if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener("click", closeConfirmationModal);
}

if (trackNewOrderBtn) {

    trackNewOrderBtn.addEventListener("click", () => {

        closeConfirmationModal();

        const latestOrderId = localStorage.getItem(
            "bitebox_latest_order_v1"
        );

        if (latestOrderId) {
            if (trackingOrderId) {
                trackingOrderId.value = latestOrderId;
            }

            showTracking(latestOrderId);

            document.getElementById("tracking").scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Tracking form
if (trackingForm) {

    trackingForm.addEventListener("submit", event => {

        event.preventDefault();

        if (trackingOrderId) {
            showTracking(trackingOrderId.value);
        }
    });
}

// Latest order
if (latestOrderBtn) {
    latestOrderBtn.addEventListener("click", trackLatestOrder);
}

// Advance tracking
if (advanceTrackingBtn) {
    advanceTrackingBtn.addEventListener("click", advanceTracking);
}


// ==========================================
// 21. CURRENT YEAR IN FOOTER
// ==========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ==========================================
// 22. INITIALIZE WEBSITE
// ==========================================

filterAndSortFoods();

updateCart();

console.log("BiteBox JavaScript connected successfully!");