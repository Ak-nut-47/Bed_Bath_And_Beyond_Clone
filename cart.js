
let cartproducts = JSON.parse(localStorage.getItem("cart"));
let emp = document.getElementById("empty");
let dis = document.getElementById("card");
let con = document.getElementById("con");
let count=1;
let totalpro = document.getElementById("count");
let totalcost = document.getElementById("cost");
let placeorder = document.getElementById("order");



if(cartproducts==null){
    emp.style.display="block";
    dis.style.display="none";
    con.style.display="none"
}else{
    emp.style.display="none";
    dis.style.display="grid";
    con.style.display="flex";
}



totalpro.innerText=cartproducts.length;

cartproducts.forEach(function(e,i){
  let totalCount=cartproducts.length;
  //console.log(totalCount)
  let parent = document.getElementById("card");
  let card = document.createElement("div");
  card.setAttribute("class","pro")


  let Img = document.createElement("img");
  Img.setAttribute("src",e.img);
  

  let Name = document.createElement("p");
  Name.innerHTML = e.name;

  let Price = document.createElement("h3");
  Price.innerText = "₹"+" "+e.price;
  // console.log(e.price);

  
  

  
  let rem = document.createElement("button");
  rem.textContent = "-";
  rem.style.width="15%";
  rem.style.marginLeft="2px"
  rem.addEventListener("click",function(){
    if(qty.innerText<=1){
        cartproducts.splice(i,1);
        if(cartproducts.length === 0){
            cartproducts = null;
        }
        localStorage.setItem("cart",JSON.stringify(cartproducts));
        
        window.location.reload();

    }else{
        qty.innerText--;
       
       
      
    }
  })

  let qty = document.createElement("span");
  qty.innerText=count;

  

  let add = document.createElement("button");
  add.textContent = "+";
  add.style.width="15%";
  add.addEventListener("click",function(){
    qty.innerText++;
   
   
   
  })
 

  

  let del = document.createElement("button");
  del.textContent = "Delete";
  del.style.width="40%";
  del.style.marginLeft="40px"
  del.addEventListener("click",function(){
    cartproducts.splice(i,1);
    if(cartproducts.length === 0){
        cartproducts = null;
    }
    localStorage.setItem("cart",JSON.stringify(cartproducts));
    
    window.location.reload();

  })

  let totalprice = cartproducts.reduce((acc,e)=>acc+(parseInt(e.price)),0);
  console.log(+e.price)
  let p = totalprice;

  console.log(p);

totalcost.innerText="₹"+" "+p;
 

  card.append(Img,Name,Price,rem,qty,add,del)
  parent.append(card);
  let sup=document.querySelector("#cartCount").innerText=totalCount;

  

});


placeorder.addEventListener("click",function(){
    localStorage.setItem("paymentproducts",JSON.stringify(cartproducts));
    window.location.assign("./address.html");
})