let dashboard = document.getElementById("dashboard-page");
let products = document.getElementById("products-page");
let orders = document.getElementById("orders-page");
let home = document.getElementById("home");
let tableBody = document.getElementById("tbody");
let i = 1;

home.addEventListener("click",() => {
    window.location = "./index.html";
})

dashboard.addEventListener("click",() => {
    window.location = "./dashboard.html";
})
products.addEventListener("click",() => {
    window.location = "./adminProducts.html";
})
orders.addEventListener("click",() => {
    window.location = "./adminOrders.html";
})

window.addEventListener("load",() => {
     let userData = JSON.parse(localStorage.getItem("user"));

     if(userData == undefined){
        userData = [];
     }

     renderCustomers(userData);
})

function renderCustomers(userData){

    tableBody.innerHTML = "";
      
    userData.forEach((element) => {
        
        let row = document.createElement("tr");
        
        let sno = document.createElement("td");
        sno.innerText = i;
        i++;

        let name = document.createElement("td");
        name.innerText = element.fname + element.lname;

        let email = document.createElement("td");
        email.innerText = element.email;

        let mob = document.createElement("td");
        mob.innerText = element.mobile;

        row.append(sno,name,email,mob);

        tableBody.append(row);

     });

}