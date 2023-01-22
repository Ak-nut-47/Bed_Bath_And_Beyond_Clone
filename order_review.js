
let paymentproducts = JSON.parse(localStorage.getItem("Cart_item"));
let emp = document.getElementById("empty");
let mainSection = document.getElementById("card");
let con = document.getElementById("con");
let count=1;
// let totalpro = document.getElementById("count");
let totalcost = document.getElementById("cost");
let checkoutBtn = document.getElementById("go_to_checkout");
let totalCartPrice = document.getElementById("total");
let orderBtn = document.getElementById("place_order");
// console.log(checkoutBtn);






// totalpro.innerText=paymentproducts.length;

paymentproducts.forEach(function(item,index){
  let totalCount=paymentproducts.length;
//   console.log(totalCount)
let card = document.createElement("div");
card.classList.add("itemCard");
// card.innerHTML=`
// <div style="width:30%;">
// <img width="100%" src="${item.image}" alt="">
// </div>
// <div  style="width:70%;">
// <h3 class="card-description">${item.description}</h3>
// <p class="card-price">$. ${item.price}</p>
// <select name="quantity" id="quantity-select">
//     <option value="">--quantity--</option>
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     <option value="5">5</option>
//     <option value="5+">5+</option>
// </select>
// <button id="delete-item">Delete</button>

// </div>
// `


let imgdiv = document.createElement("div");
imgdiv.setAttribute("style","width:30%;")
let image = document.createElement("img");
image.setAttribute("src",item.image);

let descriptiondiv = document.createElement("div");
descriptiondiv.setAttribute("style","width:70%;")
let des = document.createElement("h3");
des.setAttribute("class","card-description");
des.innerText=item.description;

let price = document.createElement("p");
price.setAttribute("class","card-price")
price.innerText=item.price;
 

let quantity = document.createElement("p");
quantity.setAttribute("class","Quantity");
quantity.innerText = "Quantity :- 1"

let deleteBtn = document.createElement("button");
deleteBtn.setAttribute("id","delete-item")
deleteBtn.innerText="Delete";







descriptiondiv.append(des,price,quantity,deleteBtn)
imgdiv.append(image);
card.append(imgdiv,descriptiondiv)

mainSection.append(card); 
  
//   let deleteBtn = document.getElementById("delete-item");
  
deleteBtn.addEventListener("click",()=>{
    // console.log("wornking");
    paymentproducts.splice(index,1);
    if(paymentproducts.length === 0){
        paymentproducts = null;
    }else{
        localStorage.setItem("Cart_item",JSON.stringify(paymentproducts));
        window.location.reload(); 
    }
    
    
})


    
});
let selectedQuantity = document.getElementById("quantity-select");
// console.log(selectedQuantity);

let totalPrice = paymentproducts.reduce((acc,item)=>{
        acc = acc + item.price;
        return acc;

    
   
},0)
 totalcost.innerText = "$"+ parseFloat(totalPrice).toFixed(2);
 totalCartPrice.innerText = "$"+parseFloat(totalPrice+1.86).toFixed(2);

//  console.log(typeof(totalPrice));


orderBtn.addEventListener("click",()=>{
    alert("Thank You! Your Order Is Placed");
    localStorage.setItem("Order_number",Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    localStorage.setItem("Payment_mode","Cash on Delivery");
    localStorage.setItem("Payment_status","false");
    localStorage.setItem("Amount",totalPrice);
    localStorage.removeItem("small_kitchen_appliances");
    localStorage.removeItem("Cart_item");


    window.location.href="index.html"
})
let backToCartBtn = document.getElementById("back");
backToCartBtn.addEventListener("click",()=>{
   window.location.href="cart.html";
})