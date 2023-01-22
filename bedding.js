let kitchen_appliances = document.getElementById("kitchen_appliances");
kitchen_appliances.addEventListener("click", function() {
    window.location.href = "small_kitchen_appliances.html";
   
});


let x = document.getElementById("right_slider");
x.addEventListener("click", function () {
    document.getElementById('scrollll').scrollLeft += 560;
  
}
);
let y = document.getElementById("left_slider");
y.addEventListener("click", function () {
    document.getElementById('scrollll').scrollLeft -= 560;
}
);
