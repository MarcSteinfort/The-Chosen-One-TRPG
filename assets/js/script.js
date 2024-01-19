/* Attributes*/
let strength = 5;
let dexterity = 5;
let intelligence = 5;


let currentStep = 1;

/*Arrays for Choices and descriptions*/
const choiceTexts = [
    ["Ask the fishermen.", "Approach the shady figure.", "Talk to the merchants."],
    ["Talk to the Merchants", "Go to the Warehouse", "Look for the shady Figure"],
    ["Introduce yourself and ask if he knows about the stolen portrait.", "Grab his arm and demand information.", "Threaten him with legal consequences if he doesn't cooperate."],
    ["Ask the Fishermen", "Look for the shady Figure", "Search for the local artist"],
    ["Try to break open the door", "Try to find a open window or a way inside.", "Lockpick the closed door"],
    ["Offer him a reward for information.", "Mention the Queen's wrath if he withholds information.", "Ask about any suspicious activities he might have witnessed"],
    ["Run from the guards", "Explain everything to the Guards", "Calm the Shady person and offer him payment for information."],
    ["Introduce yourself and explain the situation.", "Throw something at him to stop him from potentially running ask him about the portrait.", "Try to catch him and ask him about the Portrait"]
];

const descriptionText = [

/*2*/     "The fishermen mention seeing a suspicious person sneaking around the warehouses.",
/*3*/     "As you approach, the figure notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.",
/*4*/     "A merchant recognizes the portrait and points you to a local artist living in a warehouse who might have more information.",
/*5*/     "You arrived at the Warehouse as described by the Merchant. It seems to be closed",
/*6*/     "After looking out for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.",
/*7*/     "You decide to take a diplomatic approach. 'I am a detective of the crown, and I heard you might have information about a stolen portrait. Care to share?'",
/*8*/     "The man reacts defensively, attracting attention from nearby guards.",
/*9*/     "The man, fearing legal repercussions, spills the rumors he heard. About a Artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.",
/*10*/    "After looking for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It is a hooded man, glancing nervously around. 'What do you want?' he asks.",
/*11*/    "You follow the tracks of the artist to a closed Warehouse",
/*12*/    "You break open the door and see inside an Atelier with a young man painting.",
/*13*/    "You find a open Window on the level above you. It appears you can climb up there and get in.",
/*14*/    "Inside, you see an atelier with a young man painting.",
/*15*/    "You manage to open the door and inside you see an Atelier with a young man painting.",
/*16*/    "He gladly accepts the reward and shares information about a Artist living in a warehouse who might know more about this painting.",
/*17*/    "The man, fearing legal repercussions, spills the rumours he heard. About a Artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.",
/*18*/    "He can not recall any suspicious activity.",
/*19*/    "You did not manage to escape the guards and will be taken into custody. At the Time you explain everything and are allowed to set your foot free. The Thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe. (Game Over)",
/*20*/    "The do not believe you and you will be taken into custody. At the Time you explain everything and are allowed to set your foot free. The Thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe. (Game Over)",
/*21*/    "He accepts your offer an tells you about an Artist living in the Warehouse down the street, who might have more Information.",
/*22*/    "Introduce yourself and explain the situation.",
/*23*/    "Throw something at him to stop him from potentially running ask him about the portrait.",
/*24*/    "Try to catch him and ask him about the Portrait",
/*25*/    "You head to the Tavern, it is lively, filled with sailors and locals enjoying their drinks. As you enter, you everybody is looking at you. The air is suddenly thick with tension. (To be continued)"
];

updateStory("You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.");
updateButtonLabels(choiceTexts[currentStep - 1]);

/**Function for the different Steps.
 */
function makeChoice(choice) {
    switch (choice) {

        case 1:
            handleStep1(choice);
            break;
        case 2:
            handleStep2(choice);
            break;
        case 3:
            handleStep3(choice);
            break;
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
}
/**Function for the different Choices
 */
function handleStep1(choice) {
    switch (choice) {
        case 1:
            updateStory(descriptionText[currentStep - 1]);
            currentStep =2;
            updateButtonLabels(choiceTexts[currentStep - 1]);
            break;

        case 2:
            updateStory(descriptionText[currentStep - 1]);
            currentStep =3;
            updateButtonLabels(choiceTexts[currentStep - 1]);
            break;

        case 3:
            updateStory(descriptionText[currentStep - 1]);
            currentStep =4;
            updateButtonLabels(choiceTexts[currentStep - 1]);
            break;
            
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
}

function handleStep2(choice) {
    switch (choice) {
        case 1:
            updateStory(descriptionText[currentStep - 2]);
            currentStep = 3
            updateButtonLabels(choiceTexts[currentStep - 2]);

            break;
        case 2:
            updateStory(descriptionText[currentStep - 2]);

            updateButtonLabels(choiceTexts[currentStep - 2]);

            break;
        case 3:
            updateStory(descriptionText[currentStep - 2]);

            updateButtonLabels(choiceTexts[currentStep - 2]);

            break;
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
}

function handleStep3(choice) {
    switch (choice) {
        case 1:
            updateStory(descriptionText[currentStep - 4]);

            updateButtonLabels(choiceTexts[currentStep - 4]);
            break;

        case 2:
            updateStory(descriptionText[currentStep - 1]);

            updateButtonLabels(choiceTexts[currentStep - 1]);
            break;

        case 3:
            updateStory(descriptionText[currentStep - 1]);

            updateButtonLabels(choiceTexts[currentStep - 1]);
            break;
            
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
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
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button, index) => {
        button.textContent = labels[index];
    });
}