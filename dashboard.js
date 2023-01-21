let url = "https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances";
let orders = document.getElementById("orders-page");
let customers = document.getElementById("customers-page");
let products = document.getElementById("products-page");
let prodStatus = document.getElementById("prodStatus");

products.addEventListener("click",() => {
    window.location = "./adminProducts.html";
})
orders.addEventListener("click",() => {
    window.location = "./adminOrders.html";
})
customers.addEventListener("click",() => {
    window.location = "./adminCustomer.html";
})

let num;

window.addEventListener("load", () => {
    
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        num = data.length;
        prodStatus.innerText = `We have ${num} products in our inventory.`;
    })
    
})
