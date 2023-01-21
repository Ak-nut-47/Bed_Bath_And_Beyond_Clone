let dashboard = document.getElementById("dashboard-page");
let products = document.getElementById("products-page");
let customers = document.getElementById("customers-page");

dashboard.addEventListener("click",() => {
    window.location = "./dashboard.html";
})
products.addEventListener("click",() => {
    window.location = "./adminProducts.html";
})
customers.addEventListener("click",() => {
    window.location = "./adminCustomer.html";
})