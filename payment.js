let nextBtn = document.getElementById("review");
nextBtn.addEventListener("click",()=>{
    window.location.href="order_review.html";
})

let cartproducts = JSON.parse(localStorage.getItem("small_kitchen_appliances"));
let totalpro = document.getElementById("count");
let totalcost = document.getElementById("cost");
// let checkoutBtn = document.getElementById("go_to_checkout");
let totalCartPrice = document.getElementById("total");

totalpro.innerText=cartproducts.length;

let totalPrice = cartproducts.reduce((acc,item)=>{
   acc = acc + item.price;
   return acc;



},0)
totalcost.innerText = "$"+ parseFloat(totalPrice).toFixed(2);
totalCartPrice.innerText = "$"+parseFloat(totalPrice+1.86).toFixed(2);


let backToCartBtn = document.getElementById("back");
backToCartBtn.addEventListener("click",()=>{
   window.location.href="cart.html";
})