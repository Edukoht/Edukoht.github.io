let time = document.querySelector(".time");
let img = document.querySelector("img");
let button = document.querySelector("button");
button.addEventListener("click", function(){
    setInterval(getTime
        , 10);
        let button = document.querySelector("button");
        
        setInterval(getImage(getTime())
            , 5000); 
})
function getTime(){
let timer = new Date();
let hours = timer.getHours();
let minutes = timer.getMinutes();
let seconds = timer.getSeconds();
time.innerText = hours+":"+minutes+":"+seconds;
return hours;
}
function getImage(time){
    if(time > 17){
        img.setAttribute("src","https://media1.giphy.com/media/3ogwFWzFSkk8NrBOMM/giphy.gif")
        let audio1 = new Audio("audio/good-afternoon-good-evening-and-good-night.mp3");
        audio1.play();
    }
    else if(time <= 5){
        img.setAttribute("src","https://i.pinimg.com/originals/40/5a/b0/405ab03dfd7dcea8959ae04301c4400a.gif");
        let audio2 = new Audio("audio/goodnight-night-vale.mp3");
        audio2.play();
    }
    else if(time > 5 && time < 12){
        img.setAttribute("src","https://media1.tenor.com/images/3059f05126ee02b2a522dbcb0fb53f04/tenor.gif?itemid=4298063");
        let audio3 = new Audio("audio/goodmorn1.mp3");
        audio3.play(); 
    }
    else{
        img.setAttribute("src","https://media3.giphy.com/media/3oKHWogAaCH5uLVWc8/giphy.gif");
        let audio4 = new Audio("audio/good-afternoon-good-evening-and-good-night.mp3");
        audio4.play();  
    }
}
