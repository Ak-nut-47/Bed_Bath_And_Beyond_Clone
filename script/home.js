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

//// first slider container part is here
let arr1 = [
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-07-22-30_444800852900_2?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-03-04-15-21_d801final_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/S321-10301-FAB-Wide_Pinstripe_3pc_Comforter_set_NAVY_002_ecom_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-07-22-30_444800852917_1_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-05-10-03-14_444800456207_imageset?%24380%24=&wid=2000&hei=2000",
];

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

let arr2 = [
  "https://s7d2.scene7.com/is/image/BedBathandBeyond/2021-09-22-17-10_4509wallshelfwithtowelbarblack1_imageset?$690$&wid=690&hei=690",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-03-02-19-44_ss151_10?$imagePLP$&wid=363&hei=363",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/622356564779?$imagePLP$&wid=363&hei=363",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-07-31-14-02_622356564311_2?$imagePLP$&wid=363&hei=363",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/622356561914_1?$imagePLP$&wid=363&hei=363",
];

let firstImageContainer = document.getElementById("images_body");
let nextArrow = document.getElementById("next");
let prevArrow = document.getElementById("prev");

// nextArrow.addEventListener("click", () => {
//   fetchData();
// });

// function fetchData() {
//   fetch("https://63c6d291dcdc478e15ca4df5.mockapi.io/appliances")
//     .then((res) => {
//       // console.log(res);
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }
function appendSliderImages(arr) {
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
    console.log("inside the loop");
  });
}
appendSliderImages(data1);
