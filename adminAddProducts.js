let url = "https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances";
let dashboard = document.getElementById("dashboard-page");
let products = document.getElementById("products-page");
let orders = document.getElementById("orders-page");
let customers = document.getElementById("customers-page");
let addProduct = document.getElementById("adding-product");
let delProduct = document.getElementById("deleting-product");
let add = document.getElementById("add");
let del = document.getElementById("delete-btn");
let home = document.getElementById("home");

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

    let num = formValidation(addData);

    if(num == 5){
        fetch(url,{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(addData)
        });
        alert("Product Added Successfully !!");
    }
});

del.addEventListener("click",(e) => {
    e.preventDefault();

    let productId = delProduct.deleteId.value;

    let x = deleteFormValidation();

    if(x == 1){
        
        // fetch(`${url}/${productId}`)
        // .then((res) => {
        //     return res.json();
        // })
        // .then((data) => {
        //         arr.push(data);
        // })
            fetch(`${url}/${productId}`,{
                method : "DELETE"
            })
            alert("Product Deleted Successfully !!");
        }

});

function formValidation(data) {
     let check = 0;

     if(data.title == ""){
        alert("Please Enter Title");
     }
     else{
        check++;
     }

     if(data.description == ""){
        alert("Please Enter Description about Product");
     }
     else{
        check++;
     }

     if(data.category == ""){
        alert("Please Select a Category");
     }
     else{
        check++;
     }

     if(data.price == ""){
        alert("Please Enter a Price");
     }
     else{
        check++;
     }

     if(data.image == ""){
        alert("Please Enter a Valid URL for Image");
     }
     else{
        check++;
     }

     return check;
}

function deleteFormValidation(data){
    let check = 0;

    if(delProduct.deleteId.value == ""){
        alert("Please Enter a ID");
    }
    else{
        check++;
    }

    return check;
}
