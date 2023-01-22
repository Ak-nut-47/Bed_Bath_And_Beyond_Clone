let Name = document.getElementById("disname")||"";
let Address = document.getElementById("addres")||"";
let Houseno = document.getElementById("housno")||"";
let State = document.getElementById("city")||"";
let Pincode = document.getElementById("pincode")||"";
let land = document.getElementById("landmark")||"";
let Mob = document.getElementById("Mobile")||"";

let detail=document.getElementById("address");
let Detail = document.getElementById("adddis");
let ad = document.getElementById("ad");
Detail.style.display="none";
ad.style.display="none";
let info = document.getElementById("fill_address");
info.addEventListener("click",()=>{
    info.style.display="none";
    ad.style.display="block";
})

detail.addEventListener("submit",function(e){
   e.preventDefault();
   let pincode = detail.Pin.value;
   let houseno = detail.house.value;
   let address = detail.add.value;
   let landmark = detail.landmark.value;
   let city = detail.City.value;
   let name = detail.name.value;
   let mobile = detail.mob.value;

   console.log(pincode)


 Name.textContent= "Name:-"+ name;
 Address.textContent="Area:-" + address;
Houseno.textContent= "House No:-"+ houseno;
State.textContent= "City:-" + city;
Pincode.textContent= "Pincode:-"+pincode;
land.textContent= "Landscape:-"+ landmark;
Mob.textContent= "Mobile No:-" + mobile;

   Detail.style.display="block";
   detail.style.display="none";

   
    
})

let nBtn = document.getElementById("checkout");
nBtn.addEventListener("click",()=>{
   window.location.href="payment.html"
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