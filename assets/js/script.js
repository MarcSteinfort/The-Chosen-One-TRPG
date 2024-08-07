/* Attributes*/
let strength = 5;
let dexterity = 5;
let intelligence = 5;

let currentStep = 0;

updateStory("You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.");
updateButtonLabels(choiceTexts[currentStep]);
/**Function to change the image for certain choices */
function changeImage(imgsrc, imgalt) {
    document.getElementById("imgChange").src = imgsrc;
    document.getElementById("imgChange").alt =imgalt;
}
/**Function to reset the Attributes */
function resetAttributes(){
    strength = 5;
    intelligence = 5;
    dexterity = 5;
    updateAttributes();
}
/**Function for the different Choices
 */
function handleStep(choice) { //got help of a professional friend of mine with this function
    if(currentStep == 25){
        resetAttributes();
    }
    let nextDescriptionText = choiceTexts[currentStep][choice - 1].nextStep;
    let descriptionText = descriptionTexts[nextDescriptionText];
    let selectedChoice = choiceTexts[currentStep][choice - 1];

    if (selectedChoice.condition && //I had help especially with this section 
        ((selectedChoice.condition.strength && selectedChoice.condition.strength > strength) ||
        (selectedChoice.condition.dexterity && selectedChoice.condition.dexterity > dexterity) ||
        (selectedChoice.condition.intelligence && selectedChoice.condition.intelligence > intelligence))) {
            let failureBox = document.getElementById("failurebox");
            failureBox.style.display = "block";
    
            // Hide the failure box after 5 seconds
            setTimeout(function() {
                failureBox.style.display = "none";
            }, 5000);
    }
    else{
        if(descriptionText.image){
            changeImage(descriptionText.image, descriptionText.alt);
            document.getElementById("imgChange").style.display="block"
        }
        else{
            document.getElementById("imgChange").style.display="none"
        }
        updateStory(descriptionText.text);
        updateCharacterAttributes(choiceTexts[currentStep][choice - 1]);
        updateButtonLabels(choiceTexts[descriptionText.buttons]);
        currentStep = descriptionText.buttons;
    }
}
/**Function to read Attributes in Choicetexts */
function updateCharacterAttributes(choice) {
    if ("strength" in choice) {
        strength += choice.strength;
    }
    else if ("dexterity" in choice) {
        dexterity += choice.dexterity;
    }
    else if ("intelligence" in choice) {
        intelligence += choice.intelligence;
    }
    updateAttributes();
}

/**Function to update the attributes */
function updateAttributes() {
    document.getElementById("strength").textContent = `Strength: ${strength}`;
    document.getElementById("dexterity").textContent = `Dexterity: ${dexterity}`;
    document.getElementById("intelligence").textContent = `Intelligence: ${intelligence}`;
}

/**Function to update story text */
function updateStory(text) {
    document.getElementById("text").textContent = text;
}

/** Function to update button text labels */
function updateButtonLabels(labels) {
    if (labels.length > 0) {
        let buttons = document.querySelectorAll(".btn");
        buttons.forEach((button, index) => {
            button.textContent = labels[index].text;
        });
    }
    else {
        document.getElementById("button_choice").remove();
    }
}

let timer; // Variable to hold the timer

/* Function to start the timer */
function startTimer(duration, callback) { //This code is from Stackoverflow but I modified it for my needs. This includes all other function in relation with the timer
   let timeLeft = duration;
    updateTimerDisplay(timeLeft); // Initialize the display
    timer = setInterval(function() {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timer);
            callback(); // Execute the callback function when time is up
        }
    }, 1000);
}

/* Function to stop the timer */
function stopTimer() {
    clearInterval(timer);
}
function handleRestart () {
    
}
/* Function to update the timer display */
function updateTimerDisplay(time) {
    document.getElementById("timer").textContent = `Time left: ${time} seconds`;
}

/* Callback function when time is up */
function onTimeUp() {
    updateStory("Time is up! You hesitated too long and the opportunity is lost. The thief has already left the town. The punishment of the queen will be severe.");
    currentStep = 12; // Reset current step
    updateButtonLabels(choiceTexts[currentStep]);
    resetAttributes();

}

/*To start the timer when making a choice */
function makeChoice(choice) {
    stopTimer(); // Stop any existing timer
    handleStep(choice);
    startTimer(20, onTimeUp);
}

/* Initialize the game */
function initializeGame() {
    updateStory(initialDescription.text);
    updateButtonLabels(choiceTexts[currentStep]);
    startTimer(20, onTimeUp);
}

// Add event listeners to buttons
document.getElementById("btn--1").addEventListener("click", () => makeChoice(1));
document.getElementById("btn--2").addEventListener("click", () => makeChoice(2));
document.getElementById("btn--3").addEventListener("click", () => makeChoice(3));

// Call this function to initialize the game
initializeGame();