let orders = document.getElementById("orders-page");
let customers = document.getElementById("customers-page");
let products = document.getElementById("products-page");

products.addEventListener("click",() => {
    window.location = "./adminProducts.html";
})
orders.addEventListener("click",() => {
    window.location = "./adminOrders.html";
})
customers.addEventListener("click",() => {
    window.location = "./adminCustomer.html";
})