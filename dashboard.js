let url = "https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances";
let orders = document.getElementById("orders-page");
let customers = document.getElementById("customers-page");
let products = document.getElementById("products-page");
let prodStatus = document.getElementById("prodStatus");
let orderStatus = document.getElementById("orderStatus");
let userStatus = document.getElementById("userStatus");
let home = document.getElementById("home");

home.addEventListener("click",() => {
    window.location = "./index.html";
})

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

window.addEventListener("load",() => {
    let orderData = JSON.parse(localStorage.getItem(""));
    let userData = JSON.parse(localStorage.getItem("user"));

    if(orderData == undefined){
       orderData = [];
    }
    if(userData == undefined){
        userData = [];
    }

    orderStatus.innerText = `${orderData.length} Orders placed so far.`;
    userStatus.innerText = `${userData.length} Users registered with us.`;
    
})
