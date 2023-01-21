// var prevDistance = window.pageYOffset;
// window.onscroll = function () {
//   var currentDistance = window.pageYOffset;
//   if (prevDistance > currentDistance) {
//     document.getElementById("navbar-one").style.top = "block";
//   } else {
//     document.getElementById("navbar-one").style.display = "none";
//   }
//   prevDistance = currentDistance;
// };

// var prevScrollheight = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollheight = window.pageYOffset;
//   if (prevScrollheight > currentScrollheight) {
//     document.getElementById("navbar-two").style.top = "42px";
//   } else {
//     document.getElementById("navbar-two").style.top = "0";
//   }
//   prevScrollheight = currentScrollheight;
// };

/*
var prev = window.pageYOffset;
window.onscroll = function () {
  var current = window.pageYOffset;
  if (prev > current) {
    document.getElementById("navbar-three").style.display = "block";
    document.getElementById("navbar-three").style.transition = "0.6";
  } else {
    document.getElementById("navbar-three").style.display = "none";
    document.getElementById("navbar-three").style.transition = "0.6";
  }
  prev = current;
};

*/

//// first slider container part is here

let data1 = [
  {
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-07-22-30_444800852900_2?%24380%24=&wid=2000&hei=2000",
    price: 60,
    description: "Breville Juice Fountain Cold XL in Stainless Steel",
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
    ratingCount: 30,
  },
  {
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-03-04-15-21_d801final_imageset?%24380%24=&wid=2000&hei=2000",
    price: 80,
    description: "KitchenAid Semi-Automatic Espresso Machine",
    ratingImg:
      "https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
    ratingCount: 50,
  },
  {
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/S321-10301-FAB-Wide_Pinstripe_3pc_Comforter_set_NAVY_002_ecom_imageset?%24380%24=&wid=2000&hei=2000",
    price: 30,
    description:
      "Cucisina Aluminum Lemon Squeezer, Citrus Juicer - Commercial Grade Aluminium Lemon Juicer",
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
    ratingCount: 40,
  },
  {
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-07-22-30_444800852917_1_imageset?%24380%24=&wid=2000&hei=2000",
    price: 160,
    description:
      "Ninja Foodi Power Blender & Processor System with Smoothie Bowl Maker & Nutrient Extractor",
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
    ratingCount: 80,
  },
  {
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-05-10-03-14_444800456207_imageset?%24380%24=&wid=2000&hei=2000",
    price: 130,
    description:
      "Cucisina Copper Lemon Squeezer, Citrus Juicer - Stainless Steel Lime Press",
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
    ratingCount: 250,
  },
];

let data2 = [
  {
    description: "Ninja TWISTI High Speed Blender in Platinum",
    price: 119.99,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-03-02-19-44_ss151_10?$imagePLP$&wid=363&hei=363",
    ratingCount: 520,
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description: "Keurig K-Select Single-Serve K-Cup Pod Coffee Maker",
    price: 139.99,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/137474461889279p__1?$imagePLP$&wid=363&hei=363",
    ratingCount: 256,
    ratingImg:
      "https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description:
      "Nespresso Machine by Breville VertuoLine Coffee and Espresso Maker Bundle",
    price: 259.99,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-06-04-17-12_021614999832_2?$imagePLP$&wid=363&hei=363",
    ratingCount: 326,
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description: "Margaritaville Bahamas Frozen Concoction Maker",
    price: 236.99,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/27045782937mb_1?$imagePLP$&wid=363&hei=363",
    ratingCount: 95,
    ratingImg:
      "https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description: "Black & Decker 4-Slice Toaster Oven in Grey",
    price: 39.99,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-07-08-14-43_50875816084_1?$imagePLP$&wid=363&hei=363",
    ratingCount: 36,
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
];

let data3 = [
  {
    description: "Ninja CREAMi 7 One-Touch Program Ice Cream Maker",
    price: 11.99,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-07-27-09-56_nc301_1?$imagePLP$&wid=363&hei=363",
    ratingCount: 50,
    ratingImg:
      "https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description:
      "Keurig K-Duo Plus Coffee Maker with Single Serve K-Cup Pod & Carafe Brewer",
    price: 31.99,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/611247379820__1?$imagePLP$&wid=363&hei=363",
    ratingCount: 52,
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description: "Breville Smart Oven Air Fryer Pro",
    price: 111.0,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/BOV900_USC_PL_FV_Baked_Swirls_Door_Closed_Lifestyle?$imagePLP$&wid=363&hei=363",
    ratingCount: 239,
    ratingImg:
      "https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description: "Black + Decker 1.7-Liter Rapid Boil Electric Kettle",
    price: 23,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-07-11-11-01_050875828025_1?$imagePLP$&wid=363&hei=363",
    ratingCount: 111,
    ratingImg:
      "https://img.freepik.com/premium-vector/two-stars-rating-button_714799-525.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
  {
    description:
      "Keurig K-Cafe SMART Single-Serve Coffee, Latte & Cappuccino Maker in Black",
    price: 12.36,
    image:
      "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-11-22-14-28_5000365485_01?$imagePLP$&wid=363&hei=363",
    ratingCount: 25,
    ratingImg:
      "https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?size=626&ext=jpg&ga=GA1.2.904162551.1669574312",
  },
];
let firstImageContainer = document.getElementById("images_body");
let nextArrow = document.getElementById("next");
let prevArrow = document.getElementById("prev");

function appendSliderImages(arr) {
  firstImageContainer.innerHTML = null;
  arr.forEach((element) => {
    let slide_dabba = document.createElement("div");
    let upperDiv = document.createElement("div");
    upperDiv.setAttribute("class", "upperDiv");
    let slide_image = document.createElement("img");
    slide_image.setAttribute("src", element.image);
    let price = document.createElement("h2");
    price.setAttribute("class", "price");
    price.innerText = "$" + element.price;
    let description = document.createElement("a");
    description.setAttribute("href", "#");
    description.setAttribute("class", "description");
    description.innerHTML = `<p class = "description_text">${element.description} </p>`;
    upperDiv.append(slide_image, price, description);
    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "ratingDiv");
    let ratingStar = document.createElement("img");
    ratingStar.setAttribute("src", element.ratingImg);
    let ratingTotal = document.createElement("p");
    ratingTotal.innerText = element.ratingCount;
    ratingDiv.append(ratingStar, ratingTotal);
    slide_dabba.append(upperDiv, ratingDiv);
    firstImageContainer.append(slide_dabba);
    // console.log("inside the loop");
  });
}
appendSliderImages(data1);
let count = 1;
nextArrow.addEventListener("click", () => {
  if (count < 3) {
    count++;
  }

  if (count == 2) {
    appendSliderImages(data2);
    console.log("nextbtn", count);
  } else if (count == 3) {
    appendSliderImages(data3);
    console.log("nextbtn", count);
  }
  if (count == 3) {
    nextArrow.style.cursor = "no-drop";
    nextArrow.style.backgroundColor = "orange";
  }
  prevArrow.style.cursor = "pointer";
});

prevArrow.addEventListener("click", () => {
  if (count >= 2) {
    count--;
  }
  if (count == 1) {
    appendSliderImages(data1);
    console.log("prevbtn", count);
  } else if (count == 2) {
    appendSliderImages(data2);
    console.log("prevbtn", count);
  }
  if (count == 1) {
    prevArrow.style.cursor = "no-drop";
    prevArrow.style.backgroundColor = "orange";
  }
  nextArrow.style.cursor = "pointer";
});

let c = 1;
setInterval(() => {
  c++;
  if (c == 4) {
    c = 1;
    appendSliderImages(data1);
  }
  if (c == 2) {
    appendSliderImages(data2);
  } else if (c == 3) {
    appendSliderImages(data3);
  }
}, 3000);

//SECOND SLIDESHOW PART IS HERE
let secondImageContainer = document.getElementById("images_body_2");
let nextArrow2 = document.getElementById("next_2");
let prevArrow2 = document.getElementById("prev_2");

function appendSliderImages2(arr) {
  secondImageContainer.innerHTML = null;
  arr.forEach((element) => {
    let slide_dabba = document.createElement("div");
    let upperDiv = document.createElement("div");
    upperDiv.setAttribute("class", "upperDiv");
    let slide_image = document.createElement("img");
    slide_image.setAttribute("src", element.image);
    let price = document.createElement("h2");
    price.setAttribute("class", "price");
    price.innerText = "$" + element.price;
    let description = document.createElement("a");
    description.setAttribute("href", "#");
    description.setAttribute("class", "description");
    description.innerHTML = `<p class = "description_text">${element.description} </p>`;
    upperDiv.append(slide_image, price, description);
    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "ratingDiv");
    let ratingStar = document.createElement("img");
    ratingStar.setAttribute("src", element.ratingImg);
    let ratingTotal = document.createElement("p");
    ratingTotal.innerText = element.ratingCount;
    ratingDiv.append(ratingStar, ratingTotal);
    slide_dabba.append(upperDiv, ratingDiv);
    secondImageContainer.append(slide_dabba);
    // console.log("inside the loop");
  });
}
appendSliderImages2(data1);

let i = 1;
setInterval(() => {
  i++;
  if (i == 4) {
    i = 1;
    appendSliderImages2(data1);
  }
  if (i == 2) {
    appendSliderImages2(data2);
  } else if (i == 3) {
    appendSliderImages2(data3);
  }
}, 1000);
