let ptype = document.getElementById("product_type");
ptype.addEventListener("click", () => {
    let y = document.querySelector("#product_type>div:nth-child(2)");
    let x = document.getElementById("product_type_sub");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML="-"
    } else {    
        x.style.display = "none";
        y.innerHTML="+"
    }
})
let brand_type = document.getElementById("brand_type");
brand_type.addEventListener("click", () => {
    let y = document.querySelector("#brand_type>div:nth-child(2)");
    let x = document.getElementById("brand_type_sub");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML="-"
    } else {    
        x.style.display = "none";
        y.innerHTML="+"
    }
})