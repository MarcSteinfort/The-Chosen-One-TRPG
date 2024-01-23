/* Attributes*/
let strength = 5;
let dexterity = 5;
let intelligence = 5;


let currentStep = 1;

/*Arrays for Choices and descriptions*/
const choiceTexts = [
/*0*/    ["Ask the fishermen.", "Approach the shady figure.", "Talk to the merchants."],
/*1*/    ["Talk to the Merchants", "Go to the Warehouse", "Look for the shady Figure"],
/*2*/    ["Introduce yourself and ask if he knows about the stolen portrait.", "Grab his arm and demand information.", "Threaten him with legal consequences if he doesn't cooperate."],
/*3*/    ["Ask the Fishermen", "Look for the shady Figure", "Search for the local artist"],
/*4*/    ["Try to break open the door", "Try to find a open window or a way inside.", "Lockpick the closed door"],
/*5*/    ["Offer him a reward for information.", "Mention the Queen's wrath if he withholds information.", "Ask about any suspicious activities he might have witnessed"],
/*6*/    ["Run from the guards", "Explain everything to the Guards", "Calm the Shady person and offer him payment for information."],
/*7*/    ["Introduce yourself and explain the situation.", "Throw something at him to stop him from potentially running ask him about the portrait.", "Try to catch him and ask him about the Portrait"]
/*8*/    ["Continue"]
];

const descriptionText = [
/*0*/     "The fishermen mention seeing a suspicious person sneaking around the warehouses.",
/*1*/     "As you approach, the figure notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.",
/*2*/     "A merchant recognizes the portrait and points you to a local artist living in a warehouse who might have more information.",
/*3*/     "You arrived at the Warehouse as described by the Merchant. It seems to be closed",
/*4*/     "After looking out for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.",
/*5*/     "You decide to take a diplomatic approach. 'I am a detective of the crown, and I heard you might have information about a stolen portrait. Care to share?'",
/*6*/     "The man reacts defensively, attracting attention from nearby guards.",
/*7*/     "The man, fearing legal repercussions, spills the rumors he heard. About a Artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.",
/*8*/     "After looking for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It is a hooded man, glancing nervously around. 'What do you want?' he asks.",
/*9*/     "You follow the tracks of the artist to a closed Warehouse",
/*10*/    "You break open the door and see inside an Atelier with a young man painting.",
/*11*/    "You find a open Window on the level above you. It appears you can climb up there and get in. Inside, you see an atelier with a young man painting.",
/*12*/    "Inside, you see an atelier with a young man painting.",
/*13*/    "You manage to open the door and inside you see an Atelier with a young man painting.",
/*14*/    "He gladly accepts the reward and shares information about a Artist living in a warehouse who might know more about this painting.",
/*15*/    "The man, fearing legal repercussions, spills the rumours he heard. About a Artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.",
/*16*/    "He can not recall any suspicious activity.",
/*17*/    "You did not manage to escape the guards and will be taken into custody. At the Time you explain everything and are allowed to set your foot free. The Thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe. (Game Over)",
/*18*/    "The do not believe you and you will be taken into custody. At the Time you explain everything and are allowed to set your foot free. The Thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe. (Game Over)",
/*19*/    "He accepts your offer an tells you about an Artist living in the Warehouse down the street, who might have more Information.",
/*20*/    "Introduce yourself and explain the situation.",
/*21*/    "Throw something at him to stop him from potentially running ask him about the portrait.",
/*22*/    "Try to catch him and ask him about the Portrait",
/*23*/    "He tells you about a meeting point in the near Tavern of the Thief who wants to sell the Portrait.",
/*24*/    "You head to the Tavern, it is lively, filled with sailors and locals enjoying their drinks. As you enter, you everybody is looking at you. The air is suddenly thick with tension. (To be continued)"
];

updateStory("You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.");
updateButtonLabels(choiceTexts[currentStep - 1]);

/**Function for the different Steps.
 */
function makeChoice(choice) {
    switch (currentStep) {

        case 1:
            handleStep1(choice);
            break;
        case 2:
            handleStep2(choice);
            break;
        case 3:
            handleStep3(choice);
            break;
        case 4:
            handleStep4(choice);
            break;
        case 5:
            handleStep5(choice);
            break;
        case 6:
            handleStep6(choice);
            break;
        case 7:
            handleStep7(choice);
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
            updateButtonLabels(choiceTexts[currentStep]);
            
            break;

        case 2:

            updateStory(descriptionText[currentStep]);
            updateButtonLabels(choiceTexts[currentStep + 1]);
            break;

        case 3:

            updateStory(descriptionText[currentStep +1]);
            updateButtonLabels(choiceTexts[currentStep +2]);
            break;

        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
    currentStep= currentStep+1;
}

function handleStep2(choice) {
    switch (choice) {
        case 1:
;
            updateStory(descriptionText[currentStep]);
            updateButtonLabels(choiceTexts[currentStep +1]);
            break;
        case 2:

            updateStory(descriptionText[currentStep +7]);
            updateButtonLabels(choiceTexts[currentStep +2]);

            break;
        case 3:

            updateStory(descriptionText[currentStep +2]);
            updateButtonLabels(choiceTexts[currentStep]);

            break;
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
    currentStep= currentStep+1;
}

function handleStep3(choice) {
    switch (choice) {
        case 1:

            updateStory(descriptionText[currentStep +2]);
            updateButtonLabels(choiceTexts[currentStep +2]);
            break;

        case 2:

            updateStory(descriptionText[currentStep +3]);
            updateButtonLabels(choiceTexts[currentStep +3]);
            break;

        case 3:

            updateStory(descriptionText[currentStep +4]);
            updateButtonLabels(choiceTexts[currentStep +1]);
            break;
            
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
    currentStep= currentStep+1;
}

function handleStep4(choice) {
    switch (choice) {
        case 1:

            updateStory(descriptionText[currentStep +10]);
            updateButtonLabels(choiceTexts[currentStep]);
            break;

        case 2:

            updateStory(descriptionText[currentStep +3]);
            updateButtonLabels(choiceTexts[currentStep]);
            break;

        case 3:

            updateStory(descriptionText[currentStep +12]);
            updateButtonLabels(choiceTexts[currentStep +1]);
            break;
            
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
    currentStep= currentStep+1;
}

function handleStep5(choice) {
    switch (choice) {
        case 1:
            if (strength >= 5) {
                strength += 2;
                updateAttributes();
                updateStory(descriptionText[currentStep +5]);
                updateButtonLabels(choiceTexts[currentStep +2]);
                break;
            }
        else {
            "The door doesn't open. (Try one of the other two options.)"
        }

        case 2:
            if (dexterity >=5) {
                dexterity += 2;
                updateAttributes();
                updateStory(descriptionText[currentStep +6]);
                updateButtonLabels(choiceTexts[currentStep +2]);
                break;
            }
            else {
                "You can't manage to climb up to the Window. (Try one of the other two options.)"
            }

        case 3:
            if (intelligence >= 5) {
                intelligence += 2;
                updateAttributes();
                updateStory(descriptionText[currentStep +8]);
                updateButtonLabels(choiceTexts[currentStep +4]);
                break;
            }
            else {
                "You can't lockpick the door. (Try one of the other two options.)"
            }
            
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
    currentStep= currentStep+1;
}

function handleStep6(choice) {
    switch (choice) {
        case 1:

            updateStory(descriptionText[currentStep +10]);
            updateButtonLabels(choiceTexts[currentStep]);
            break;

        case 2:

            updateStory(descriptionText[currentStep +3]);
            updateButtonLabels(choiceTexts[currentStep]);
            break;

        case 3:

            updateStory(descriptionText[currentStep +12]);
            updateButtonLabels(choiceTexts[currentStep +1]);
            break;
            
        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
    currentStep= currentStep+1;
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