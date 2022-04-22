// Trigger event on Button press
var buttons = document.querySelectorAll("button.drum");
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
     var buttonInnerHTML = this.innerHTML;
     makesound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
  });
}

//Trigger event on keyboard button press
document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});


function makesound(key){
    switch(key){
       case 'w': var audio = new Audio('sounds/crash.mp3'); break;
       case 'a': var audio = new Audio('sounds/kick-bass.mp3'); break;
       case 's': var audio = new Audio('sounds/snare.mp3'); break;
       case 'd': var audio = new Audio('sounds/tom-1.mp3'); break;
       case 'j': var audio = new Audio('sounds/tom-2.mp3'); break;
       case 'k': var audio = new Audio('sounds/tom-3.mp3'); break;
       case 'l': var audio = new Audio('sounds/tom-4.mp3'); break;
       default:  console.log(this); break;
   }
   audio.play();
}


//button animation
function buttonAnimation(currentKey){

   var activeKey = document.querySelector("."+currentKey);
   activeKey.classList.add("pressed");
   activeKey.style.color = "white";

   setTimeout(function(){
     activeKey.classList.remove("pressed");
     activeKey.style.color = "#DA0463";
   }, 200);
}
