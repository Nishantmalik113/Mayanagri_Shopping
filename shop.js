let ScrollContainer = document.querySelector(".shop-main-grid ul");
let backbtn= document.getElementById("backbtn");
let nextbtn= document.getElementById("nextbtn");


nextbtn.addEventListener("click", ()=>{
    ScrollContainer.style.scrollBehavior = "smooth";
    ScrollContainer.scrollLeft += 1230;
});

backbtn.addEventListener("click", ()=>{
    ScrollContainer.style.scrollBehavior = "smooth";
    ScrollContainer.scrollLeft -= 1230;
});