
let cartproducts = JSON.parse(localStorage.getItem("small_kitchen_appliances"));
let emp = document.getElementById("empty");
let mainSection = document.getElementById("card");
let con = document.getElementById("con");
let count=1;
let totalpro = document.getElementById("count");
let totalcost = document.getElementById("cost");
let checkoutBtn = document.getElementById("go_to_checkout");
console.log(checkoutBtn);
checkoutBtn.addEventListener("click",()=>{
    console.log("working")
    window.location.href="checkout.html"
})


if(cartproducts==null){
    emp.style.display="block";
    mainSection.style.display="none";
    con.style.display="none"
}else{
    emp.style.display="none";
    mainSection.style.display="flex";
    con.style.display="flex";
}



totalpro.innerText=cartproducts.length;

cartproducts.forEach(function(item,index){
  let totalCount=cartproducts.length;
  console.log(totalCount)
let card = document.createElement("div");
card.classList.add = "itemCard";
card.innerHTML=`
<div style="border : 3px solid teal;">
<img src="${item.image}" alt="">
</div>
<div  style="border : 3px solid red;">
<h3 class="card-description">${item.description}</h3>
<p class="card-price">$. ${item.price}</p>
<select name="quantity" id="quantity-select">
    <option value="">--Please choose quantity--</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="5+">5+</option>
</select>
<button id="delete-item">Delete</button>

</div>
`
  mainSection.append(card);

});


// placeorderBtn.addEventListener("click",function(){
//     console.log("working")
//     localStorage.setItem("paymentproducts",JSON.stringify(cartproducts));
//     window.location.href="checkout.html";
// })