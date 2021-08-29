var numberOfButtons = document.querySelectorAll(".drum").length

function playSound (key) {

        switch (key) {
            case 'w':
              var tom1 = new Audio ('sounds/tom-1.mp3')
              tom1.play()
                
                break;
      
                case 'a':
              var tom2 = new Audio ('sounds/tom-2.mp3')
              tom2.play()
                
                break;
      
                case 's':
              var tom3 = new Audio ('sounds/tom-3.mp3')
              tom3.play()
                
                break;
      
                case 'd':
              var tom4 = new Audio ('sounds/tom-4.mp3')
              tom4.play()
                
                break;
      
                case 'j':
              var snare = new Audio ('sounds/snare.mp3')
              snare.play()
                
                break;
      
                case 'k':
              var crash = new Audio ('sounds/crash.mp3')
              crash.play()
                
                break;
      
                case 'l':
              var kickBass = new Audio ('sounds/kick-bass.mp3')
              kickBass.play()
                
                break;
        
            default:
              console.log(key)
                break;
        }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add('pressed')

    setTimeout( function () {
        activeButton.classList.remove('pressed')
        
    }, 100)
}

for (i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        buttonInnerHtml = this.innerHTML
        
        playSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
      
    })

    document.addEventListener("keydown", function (event) {
        keyPressed = event.key

        playSound (keyPressed);

        buttonAnimation (keyPressed);
    })
}




// var houseKeeper1 = new HouseKeeper ('Jillian', 22, 1, ['english', 'french'], ['bathrooms', 'bedrooms'])

//   function HouseKeeper (name, age, yearsOfExperience, languages, cleaningRepetoire) {
//       this.name = name
//       this.age = age
//       this.yearsOfExperience = yearsOfExperience
//       this.languages = languages
//       this.cleaningRepetoire = cleaningRepetoire
//       this.clean = function() {
//           alert("Okay. I'm going to start cleaning now.")
          
//       }

//   }

//   houseKeeper1.clean()