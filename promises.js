// 1. // Creating a Simple Promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received!"), 1000);
});

promise.then((data) => console.log(data));

// Output : Data received!

// <------------------------------------------------------------->

// 2. Chaining Promises
const cart = ["shoes", "pants", "kurta"];

// Consumer
createOrder(cart)
  .then((orderId) => {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log("Payment Success:", paymentInfo);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });

// Producer
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      return reject(new Error("Cart is not valid"));
    }

    const orderId = "ORD12345";
    setTimeout(() => {
      resolve(orderId);
    }, 2000);
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (!orderId) {
      return reject(new Error("Invalid Order ID"));
    }

    setTimeout(() => {
      resolve("Payment processed for " + orderId);
    }, 1500);
  });
}

function validateCart(cart) {
  return cart.length > 0;
}

// output after 2 seconds: Order ID: ORD12345
// output after 1.5 seconds: Payment Success: Payment processed for ORD12345

// <------------------------------------------------------------>

// 3. Creating and Resolving Promises--->

function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate success/failure

    setTimeout(() => {
      if (success) {
        resolve("✅ Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data.");
      }
    }, 2000);
  });
}

// Consumer: Using the Promise
fetchData()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Output after 2 seconds: Result: ✅ Data fetched successfully!
