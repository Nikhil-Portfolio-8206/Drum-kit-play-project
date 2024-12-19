//select the button using mouse
var numberOfButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//function to make sound once button is pressed
function makeSound(matchButton){
  const key = matchButton.toLowerCase();
  switch(key){
    case "w":
      var wSound = new Audio("sounds/tom-1.mp3");
      wSound.play();
      break;

    case "a":
      var aSound = new Audio("sounds/tom-2.mp3");
      aSound.play();
      break;

    case "s":
      var sSound = new Audio('sounds/tom-3.mp3');
      sSound.play();
      break;

    case "d":
      var dSound = new Audio('sounds/tom-4.mp3');
      dSound.play();
      break;

    case "j":
      var jSound = new Audio('sounds/snare.mp3');
      jSound.play();
      break;

    case "k":
      var kSound = new Audio('sounds/crash.mp3');
      kSound.play();
      break;

    case "l":
      var lSound = new Audio('sounds/kick-bass.mp3');
      lSound.play();
      break;
    default: console.log(matchButton);
  }
}

//function for the keydown
document.addEventListener("keydown", function(keyboard) {

  makeSound(keyboard.key);
  buttonAnimation(keyboard.key);

});

// Button animation
function buttonAnimation(buttonPress){
  var addClass=document.querySelector("."+buttonPress);
  addClass.classList.add("pressed");
  setTimeout(function() {
    addClass.classList.remove("pressed");
  }, 100);
}

