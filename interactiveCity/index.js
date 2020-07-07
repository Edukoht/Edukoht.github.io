const imgMenu = ["map-blue","map-red","map-green","map-yellow","map-pink","map-original"];
const allButtons = document.querySelectorAll("button");
const mainImg = document.querySelector("img");
for(let i = 0; i < allButtons.length;i++){
    allButtons[i].addEventListener("mouseover",function(){
        mainImg.setAttribute("src","img/"+imgMenu[i]+".png")
    })
    allButtons[i].addEventListener("mouseout",function(){
        mainImg.setAttribute("src","img/"+imgMenu[5]+".png")
    })
}

