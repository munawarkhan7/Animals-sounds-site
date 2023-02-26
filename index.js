// for keyboard //
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

// mouse click
var AnimalButtons = document.querySelectorAll(".animals").length;

for (var i = 0; i < AnimalButtons; i++) {

// for mouse click //
document.querySelectorAll(".animals")[i].addEventListener("click", function() {

  var buttonHTML = this.innerHTML;

  makeSound(buttonHTML);

  buttonAnimation(buttonHTML);

});

}


// function for making sounds //
function makeSound(key) {

  switch (key) {
    case "d":
      var dog = new Audio("sounds/dog.mp3");
      dog.play();
      break;

    case "c":
      var cat = new Audio("sounds/cat.mp3");
      cat.play();
      break;

    case "w":
      var wolf = new Audio('sounds/wolf.mp3');
      wolf.play();
      break;

    case "e":
      var elephant = new Audio('sounds/elephant.mp3');
      elephant.play();
      break;

    case "h":
      var horse = new Audio('sounds/horse.mp3');
      horse.play();
      break;

    case "s":
      var sheep = new Audio('sounds/sheep.mp3');
      sheep.play();
      break;


    default: console.log(key);

  }
}

// putting animation //
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
