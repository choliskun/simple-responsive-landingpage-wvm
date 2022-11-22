window.addEventListener("scroll", function(){
    var headernav = this.document.querySelector("nav");
    headernav.classList.toggle("sticky", this.window.scrollY > 0);
})

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}