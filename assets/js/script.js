/* Attributes*/
let strength = 5;
let dexterity = 5;
let intelligence = 5;


let currentStep = 0;

/*Arrays for Choices*/
const choiceTexts = [
/*0*/[{ text: "Ask the fishermen.", nextStep: 0 }, { text: "Approach the shady figure.", nextStep: 1 }, { text: "Talk to the merchants.", nextStep: 2 }],
/*1*/[{ text: "Talk to the merchants", nextStep: 2 }, { text: "Go to the warehouse", nextStep: 3 }, { text: "Look for the shady figure", nextStep: 4 }],
/*2*/[{ text: "Introduce yourself and ask if he knows about the stolen portrait.", nextStep: 5 }, { text: "Grab his arm and demand information.", nextStep: 6, strength: 1 }, { text: "Threaten him with legal consequences if he doesn't cooperate.", nextStep: 7 }],
/*3*/[{ text: "Ask the fishermen", nextStep: 0 }, { text: "Look for the shady figure", nextStep: 4 }, { text: "Search for the local artist", nextStep: 9 }],
/*4*/[{ text: "Try to break open the door", nextStep: 10, strength: 1 }, { text: "Try to find a open window or a way inside.", nextStep: 11, dexterity: 1 }, { text: "Lockpick the closed door", nextStep: 13, intelligence: 1 }],
/*5*/[{ text: "Offer him a reward for information.", nextStep: 14, intelligence: 1 }, { text: "Mention the Queen's wrath if he withholds information.", nextStep: 15 }, { text: "Ask about any suspicious activities he might have witnessed", nextStep: 16 }],
/*6*/[{ text: "Run from the guards", nextStep: 17 }, { text: "Explain everything to the Guards", nextStep: 18 }, { text: "Calm the Shady person and offer him payment for information.", nextStep: 19 }],
/*7*/[{ text: "Introduce yourself and explain the situation.", nextStep: 20, intelligence: 2 }, { text: "Throw something at him to stop him from potentially running ask him about the portrait.", nextStep: 21, strength: 2 }, { text: "Try to catch him and ask him about the portrait", nextStep: 22, dexterity: 2 }],
/*8*/[{ text: "Continue", nextStep: 24 }, { text: "Continue", nextStep: 24 }, { text: "Continue", nextStep: 24 }],
/*9*/[{ text: "Gameover"}, { text: "Gameover"}, { text: "Gameover"}],
/*10*/[{text: "Head to the barkeeper", nextStep: 23 }, {text:"ask the Tavern if they seen the man the artist described"}, {text:"Sit down at a empty desk and observe the tavern"}],
/*11*/[{text: "Force the barkeeper to give you the desired Information",}, {text: "Tell the barkeeper who you are and demand the Information",}, {text: ""}],
/*12*/[{text: "Restart", nextStep: 25}, {text: "Restart", nextStep: 25}, {text: "Restart", nextStep: 25}]
];
/*Arrays for descriptions*/
const descriptionTexts = [
/*0*/     {text: "The fishermen mention seeing a suspicious person sneaking around the warehouses.", buttons: 1 },
/*1*/     {text: "As you approach, the figure notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*2*/     {text: "A merchant recognizes the portrait and points you to a local artist living in a warehouse who might have more information.", buttons: 3 },
/*3*/     {text: "You arrived at the warehouse as described by the merchant. It seems to be closed", buttons: 4 },
/*4*/     {text: "After looking out for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*5*/     {text: "You decide to take a diplomatic approach. 'I am a detective of the crown, and I heard you might have information about a stolen portrait. Care to share?'", buttons: 5 },
/*6*/     {text: "The man reacts defensively, attracting attention from nearby guards.", buttons: 6 },
/*7*/     {text: "The man, fearing legal repercussions, spills the rumors he heard. About an artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.", buttons: 4 },
/*8*/     {text: "After looking for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It is a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*9*/     {text: "You follow the tracks of the artist to a closed warehouse", buttons: 4 },
/*10*/    {text: "You break open the door and see inside an atelier with a young man painting.", buttons: 7 },
/*11*/    {text: "You find a open window on the level above you. It appears you can climb up there and get in. Inside, you see an atelier with a young man painting.", buttons: 7 },
/*12*/    {text: "Inside, you see an atelier with a young man painting.", buttons: 7 },
/*13*/    {text: "You manage to lockpick the door and inside you see an Atelier with a young man painting.", buttons: 7 },
/*14*/    {text: "He gladly accepts the reward and shares information about an artist living in a warehouse who might know more about this painting.", buttons: 4 },
/*15*/    {text: "The man, fearing legal repercussions, spills the rumours he heard. About an artist living in a warehouse who might have more information. Following this description you arrive at a closed warehouse.", buttons: 4 },
/*16*/    {text: "He can not recall any suspicious activity.", buttons: 5 },
/*17*/    {text: "You did not manage to escape the guards and will be taken into custody. At the time you explain everything and are allowed to set your foot free. The thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9 },
/*18*/    {text: "They do not believe you and you will be taken into custody. At the time you explain everything and are allowed to set your foot free. The thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9 },
/*19*/    {text: "He accepts your offer an tells you about an artist living in the warehouse down the street, who might have more information.", buttons: 4 },
/*20*/    {text: "He listens to you, and tells you about a meeting point in the near tavern, the thief wants to sell the portrait", buttons: 8 },
/*21*/    {text: "You hit him in the back, under pain and scared for his wellbeing he tells you about a meeting in the near tavern, where the thief wants to sell the portrait.", buttons: 8 },
/*22*/    {text: "You caught him, under intense pressure, he tells you about a meeting point in the near tavern, the thief wants to sell the portrait", buttons: 8 },
/*23*/    {text: "The barkeeper looks at you with a grim face", buttons: 12},
/*24*/    {text: "You head to the tavern, it is lively, filled with sailors and locals enjoying their drinks. As you enter, everybody is looking at you. The air is suddenly thick with tension.", buttons: 10 },
/*25*/    {text: "You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.", buttons: 0},
];

updateStory("You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.");
updateButtonLabels(choiceTexts[currentStep]);

/**Function for the different Choices
 */
function handleStep(choice) {

    let nextDescriptionText = choiceTexts[currentStep][choice - 1].nextStep;
    let descriptionText = descriptionTexts[nextDescriptionText];
    updateStory(descriptionText.text);
    updateCharacterAttributes(choiceTexts[currentStep][choice - 1]);
    updateButtonLabels(choiceTexts[descriptionText.buttons]);
    currentStep = descriptionText.buttons;
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
function startTimer(duration, callback) {
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
    updateStory("Time is up! You hesitated too long and the opportunity is lost.");
    currentStep = 12; // Reset current step
    updateButtonLabels(choiceTexts[currentStep]);
    strength = 5;
    dexterity = 5;
    intelligence = 5;
    updateAttributes()
}


/*To start the timer when making a choice */
function makeChoice(choice) {
    stopTimer(); // Stop any existing timer
    handleStep(choice);
    startTimer(4, onTimeUp);
}

/* Initialize the game */
function initializeGame() {
    updateStory("You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.");
    updateButtonLabels(choiceTexts[currentStep]);
    startTimer(4, onTimeUp);
}

// Call this function to initialize the game
initializeGame();

// Get the audio element
const backgroundMusic = document.getElementById('backgroundMusic');

function playMusic() {
    backgroundMusic.play();
}

function pauseMusic() {
    backgroundMusic.pause();
}

function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function setVolume(volume) {
    backgroundMusic.volume = volume;
    console.log(`Volume set to ${volume}`);
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Set initial volume
    setVolume(0.2);
});