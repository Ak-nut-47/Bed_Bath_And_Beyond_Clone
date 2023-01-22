let dashboard = document.getElementById("dashboard-page");
let products = document.getElementById("products-page");
let customers = document.getElementById("customers-page");
let home = document.getElementById("home");
let tableBody = document.getElementById("tbody");

home.addEventListener("click",() => {
    window.location = "./index.html";
})

dashboard.addEventListener("click",() => {
    window.location = "./dashboard.html";
})
products.addEventListener("click",() => {
    window.location = "./adminProducts.html";
})
customers.addEventListener("click",() => {
    window.location = "./adminCustomer.html";
})

window.addEventListener("load",() => {
    let orderData = JSON.parse(localStorage.getItem(""));

    if(orderData == undefined){
       orderData = [];
    }

    renderCustomers(orderData);
})

function renderCustomers(orderData){

   tableBody.innerHTML = "";
     
   orderData.forEach((element) => {
       
       let row = document.createElement("tr");

       let order = document.createElement("td");
       order.innerText = element.orderNo;

       let payMode = document.createElement("td");
       payMode.innerText = element.pmode;

       let payStatus = document.createElement("td");
       payStatus.innerText = element.pstatus;

       let amount = document.createElement("td");
       amount.innerText = element.bamount;

       row.append(order,payMode,payStatus,amount);

       tableBody.append(row);

    });

}