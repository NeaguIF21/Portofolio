console.log("hello there")

//animation typing script 
var typed = new Typed(".typing",{
    strings:["design","fotografie","calatorie","social media","nutritie"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
})

//navigation

let toogleButton = document.querySelector("#nav-icon4")
let navbarLinks = document.querySelector(".navbar-links")

toogleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle('active')
    toogleButton.classList.toggle('open')
})

navbarLinks.addEventListener("click",()=>{
  navbarLinks.classList.toggle('active')
  toogleButton.classList.toggle('open')
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//contact form submit
let submitBtn = document.querySelector(".submit-button");
submitBtn.addEventListener("click",function(e){
    console.log("Clicked")
    e.preventDefault();
    let before=document.querySelector(".before-submit");
    console.log(before)
    
    before.style.display="none"
    let newH4 = document.createElement("h4");
    let newP = document.createElement("p");
    var textH4 = document.createTextNode("Something went wrong");         
    newH4.appendChild(textH4); 
    var textP = document.createTextNode("You can still contact me via email, phone number, social media");         
    newP.appendChild(textP); 

    let newElement = document.querySelector("#submit-change")
    newElement.appendChild(newH4)
    newElement.appendChild(newP)

})


