let ptype = document.getElementById("product_type");
ptype.addEventListener("click", () => {
    console.log("working")
    let y = document.querySelector("#product_type>div:nth-child(2)");
    let x = document.getElementById("product_type_sub");
    if (x.style.display === "none" ) {
        x.style.display = "block";
        y.innerHTML = "-";
        document.querySelector("#product_type").style.borderBottom = "none";
    } else  {    
        x.style.display = "none";
        y.innerHTML = "+";
        document.querySelector("#product_type").style.borderBottom = "2px solid #d6d6d6";
    }
    
})
let brand_type = document.getElementById("brand_type");
brand_type.addEventListener("click", () => {
    console.log("working")
    let y = document.querySelector("#brand_type>div:nth-child(2)");
    let x = document.getElementById("brand_type_sub");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "-";
        document.querySelector("#brand_type").style.borderBottom = "none";
    } else {    
        x.style.display = "none";
        y.innerHTML = "+";
        document.querySelector("#brand_type").style.borderBottom = "2px solid #d6d6d6";
    }
    
})
let price_type = document.getElementById("price");
price_type.addEventListener("click", () => {
    console.log("working")
    let y = document.querySelector("#price>div:nth-child(2)");
    let x = document.getElementById("price_sub");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "-";
        document.querySelector("#price").style.borderBottom = "none";
    } else {    
        x.style.display = "none";
        y.innerHTML = "+";
        document.querySelector("#price").style.borderBottom = "2px solid #d6d6d6";
    }
    
})

fetch("https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayAsCards(data);
    });

function displayAsCards(data) {
    let container = document.getElementById("cards");
    container.innerHTML = "";
    data.forEach((item,index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="card-image">
            <img src="${item.image}" alt="">
        </div>
        <div class="card-content">
            <div class="card-title">    
                <h3>${item.title}</h3>
            </div>
            
            <div class="card-description">

                <p>${item.description}</p>
            </div>
            <div class="card-price">
                <p>Rs. ${item.price}</p>
            </div>
            <div class="early-price">
                <p>Was Rs. ${Math.floor(Math.random() * (900 - 600) + 600)}</p>
            </div>
            <div class="card-rating">    
                <h3>Rating - ${item.rating}</h3>
            </div>
        </div>
        <div class="card-button">
            <button class="btn" data-id=${index}>Add to Cart</button>
        </div>
        `;
        container.appendChild(card);
    })
}


    