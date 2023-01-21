let ptype = document.getElementById("product_type");
ptype.addEventListener("click", () => {
    // console.log("working")
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
    // console.log("working")
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
    // console.log("working")
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
// working with Cards

let productsArr = [];
let arr = JSON.parse(localStorage.getItem("small_kitchen_appliances")) || [];
fetch("https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances")
    .then(response => response.json())
    .then(data => {
        productsArr = data;
        // console.log(productsArr)
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
    buttonClickEvent(data);
}

function buttonClickEvent(data) { 
    let btn = document.querySelectorAll(".btn");
btn.forEach((item) => {
   
    item.addEventListener("click", () => {
        // console.log("working")
        let id = item.getAttribute("data-id");
        arr.push(data[id]);
        localStorage.setItem("small_kitchen_appliances", JSON.stringify(arr));
        JSON.stringify(localStorage.getItem("small_kitchen_appliances"));
    })
})
}


// Filter by price - 
let _0to100 = document.getElementById("0to100");
let _101to200 = document.getElementById("101to200");
let _201to300 = document.getElementById("201to300");
let _301to400 = document.getElementById("301to400");
let _401to500 = document.getElementById("401to500");
let _500Above = document.getElementById("500+");


_0to100.addEventListener("click", () => {
    minPrice.value = "";
    maxPrice.value = "";
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;

    let state = _0to100.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.price >= 0 && item.price <= 100;
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});

_101to200.addEventListener("click", () => {
    minPrice.value = "";
    maxPrice.value = "";
    _0to100.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;

    let state = _101to200.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.price >= 101 && item.price <= 200;
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});
_201to300.addEventListener("click", () => {
    minPrice.value = "";
    maxPrice.value = "";
    _0to100.checked = false;
    _101to200.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;

    let state = _201to300.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.price >= 201 && item.price <= 300;
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});
_301to400.addEventListener("click", () => {
    _0to100.checked = false;
    minPrice.value = "";
    maxPrice.value = "";
    _101to200.checked = false;
    _201to300.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;
    
    let state = _301to400.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.price >= 301 && item.price <= 400;
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});
_401to500.addEventListener("click", () => {
    minPrice.value = "";
    maxPrice.value = "";
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;

    let state = _401to500.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.price >= 401 && item.price <= 500;
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});
_401to500.addEventListener("click", () => {
    minPrice.value = "";
    maxPrice.value = "";
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;

    let state = _401to500.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.price >= 401 && item.price <= 500;
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});
_500Above.addEventListener("click", () => {
    minPrice.value = "";
    maxPrice.value = "";
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;


    let state = _500Above.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.price >= 500;
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});

// filter from input min & max manual pricing

let minPrice = document.getElementById("min");
minPrice.addEventListener("click", () => {
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;
})
let maxPrice = document.getElementById("max");
maxPrice.addEventListener("keyup", () => {
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;

    let min = minPrice.value;
    let max = maxPrice.value;
    if (min != "" && max != "") {
        let filteredData = productsArr.filter((item) => {
            return item.price >= min && item.price <= max;
        })
        if (filteredData.length == 0) {
            let container = document.getElementById("cards");
            container.innerHTML = `<h1>No products found</h1>`;
        }
        else {
            displayAsCards(filteredData);
        }
       
    } else {
        displayAsCards(productsArr);
    }
});

// Search Functionality

let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keyup", () => {
    let searchValue = searchbar.value;
    let filteredData = productsArr.filter((item) => {
        
        return item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase());
    })
    if (filteredData.length == 0) {
        let container = document.getElementById("cards");
        container.innerHTML = `<h1>No products found</h1>`;
    }
    else {
        displayAsCards(filteredData);
    }
});

// Filter by Brands

let ninja = document.getElementById("ninja");
let breville = document.getElementById("breville");
let crockpot = document.getElementById("crockpot");
let keurig = document.getElementById("keurig");
let ikitchenaid = document.getElementById("ikitchenaid");
let icemaker = document.getElementById("icemaker");

ninja.addEventListener("click", () => {
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    minPrice.value = "";
    maxPrice.value = "";


    let state = ninja.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.title == "NINJA";
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
});

breville.addEventListener("click", () => {
    ninja.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    minPrice.value = "";
    maxPrice.value = "";

    let state = breville.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.title == "BREVILLE";
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
}
);

crockpot.addEventListener("click", () => {
    ninja.checked = false;
    breville.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    minPrice.value = "";
    maxPrice.value = "";


    let state = crockpot.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.title == "CROCKPOT";
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
}
);

keurig.addEventListener("click", () => {
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    ikitchenaid.checked = false;
    icemaker.checked = false;
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    minPrice.value = "";
    maxPrice.value = "";

    let state = keurig.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.title == "KEURIG";
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
}
);

ikitchenaid.addEventListener("click", () => {
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    icemaker.checked = false;
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    minPrice.value = "";
    maxPrice.value = "";

    let state = ikitchenaid.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.title == "KITCHENAID";
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
}
);

icemaker.addEventListener("click", () => {
    ninja.checked = false;
    breville.checked = false;
    crockpot.checked = false;
    keurig.checked = false;
    ikitchenaid.checked = false;
    _0to100.checked = false;
    _101to200.checked = false;
    _201to300.checked = false;
    _301to400.checked = false;
    _401to500.checked = false;
    _500Above.checked = false;
    minPrice.value = "";
    maxPrice.value = "";

    
    let state = icemaker.checked;
    if (state == true) {
        let filteredData = productsArr.filter((item) => {
            return item.title == "ICEMAKER";
        })
        displayAsCards(filteredData);
    }
    else { 
        displayAsCards(productsArr);
    }
}   
);







