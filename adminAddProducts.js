let url = "https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances";
let dashboard = document.getElementById("dashboard-page");
let products = document.getElementById("products-page");
let orders = document.getElementById("orders-page");
let customers = document.getElementById("customers-page");
let addProduct = document.getElementById("adding-product");
let delProduct = document.getElementById("deleting-product");
let add = document.getElementById("add");
let del = document.getElementById("delete-btn");

dashboard.addEventListener("click",() => {
    window.location = "./dashboard.html";
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

add.addEventListener("click",(e) => {
    e.preventDefault();

    let addData = {
       title : addProduct.title.value,
       description : addProduct.description.value,
       category : addProduct.category.value,
       price : addProduct.price.value,
       image : addProduct.image.value,
       rating : "4.5",
       inStock : true
    };

    fetch(url,{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(addData)
    });

});

del.addEventListener("click",(e) => {
    e.preventDefault();

    let productId = delProduct.deleteId.value;

    fetch(`${url}/${productId}`,{
        method : "DELETE"
    })
});