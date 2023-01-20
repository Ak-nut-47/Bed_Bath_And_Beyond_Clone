let url = "https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances";
let add = document.getElementById("add-prod");
let del = document.getElementById("delete-prod");
let dashboard = document.getElementById("dashboard-page");
let orders = document.getElementById("orders-page");
let customers = document.getElementById("customers-page");
let tableBody = document.getElementById("tableBody");

add.addEventListener("click",() => {
    window.location = "./adminAddProducts.html";
})
del.addEventListener("click",() => {
    window.location = "./adminAddProducts.html";
})
dashboard.addEventListener("click",() => {
    window.location = "./dashboard.html";
})
orders.addEventListener("click",() => {
    window.location = "./adminOrders.html";
})
customers.addEventListener("click",() => {
    window.location = "./adminCustomer.html";
})

window.addEventListener("load", () => {
    
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        renderProducts(data);
    })

})

function renderProducts(data) {
      tableBody.innerHTML = "";

      data.forEach((element) => {
        
         let row = document.createElement("tr");

         let productId = document.createElement("td");
         productId.innerText = element.id;

         let imageTd = document.createElement("td");
         let img = document.createElement("img");
         img.setAttribute("src",element.image);
         imageTd.append(img);

         let title = document.createElement("td");
         title.innerText = element.title;

         let category = document.createElement("td");
         category.innerText = element.category;

         let price = document.createElement("td");
         price.innerText = element.price;

         let availability = document.createElement("td");
         availability.style.color = "green";
         if(element.inStock == true){
            availability.innerText = "In Stock";
         }
         else{
            availability.innerText = "Out of Stock";
         }

         let rating = document.createElement("td");
         rating.innerText = element.rating;

         row.append(productId,imageTd,title,category,price,availability,rating);

         tableBody.append(row);

      });
}