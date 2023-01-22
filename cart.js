
let cartproducts = JSON.parse(localStorage.getItem("small_kitchen_appliances"));
let emp = document.getElementById("empty");
let mainSection = document.getElementById("card");
let con = document.getElementById("con");
let count=1;
let totalpro = document.getElementById("count");
let totalcost = document.getElementById("cost");
let checkoutBtn = document.getElementById("go_to_checkout");
let totalCartPrice = document.getElementById("total");

// console.log(checkoutBtn);



if(cartproducts==null){
    emp.style.display="block";
    mainSection.style.display="none";
    con.style.display="none"
}else{
    emp.style.display="none";
    mainSection.style.display="block";
    con.style.display="flex";
}



totalpro.innerText=cartproducts.length;

cartproducts.forEach(function(item,index){
  let totalCount=cartproducts.length;
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

let quantity = document.createElement("select");
  quantity.setAttribute("id","quantity-select")
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        let option3 = document.createElement("option");
        let option4 = document.createElement("option");
        let option5 = document.createElement("option");
        let option6 = document.createElement("option");
        
        option1.value="1";
        option1.text = "--quantity(1)--";
        option2.value="2";
        option2.text = "2";
        option3.value="3";
        option3.text = "3";
        option4.value="4";
        option4.text = "4";
        option5.value="5";
        option5.text = "5";
        option6.value="5+";
        option6.text = "5+";
        
        quantity.append(option1,quantity[0]);
        quantity.append(option2,quantity[1]);
        quantity.append(option3,quantity[2]);
        quantity.append(option4,quantity[3]);
        quantity.append(option5,quantity[4]);
        quantity.append(option6,quantity[5]);
      

 let deleteBtn = document.createElement("button");
 deleteBtn.setAttribute("id","delete-item")
 deleteBtn.innerText="delete" ;








descriptiondiv.append(des,price,quantity,deleteBtn)
imgdiv.append(image);
card.append(imgdiv,descriptiondiv)

mainSection.append(card); 
  
//   let deleteBtn = document.getElementById("delete-item");
  
deleteBtn.addEventListener("click",()=>{
    // console.log("wornking");
    cartproducts.splice(index,1);
    if(cartproducts.length === 0){
        cartproducts = null;
    }
    localStorage.setItem("small_kitchen_appliances",JSON.stringify(cartproducts));
    
    window.location.reload();

    
    
})


    
});
let selectedQuantity = document.getElementById("quantity-select");
// console.log(selectedQuantity);

let totalPrice = cartproducts.reduce((acc,item)=>{
        acc = acc + item.price;
        return acc;

    
   
},0)
 totalcost.innerText = "$"+ totalPrice;
 totalCartPrice.innerText = "$"+parseFloat(totalPrice+1.86).toFixed(2);

//  console.log(typeof(totalPrice));
checkoutBtn.addEventListener("click",()=>{
    // console.log("working")
    localStorage.setItem("Cart_item",JSON.stringify(cartproducts));
    window.location.href="checkout.html"

})