/* Attributes*/
let strength = 5;
let dexterity = 5;
let intelligence = 5;


let currentStep = 0;

/*Arrays for Choices and descriptions*/
const choiceTexts = [
/*0*/[{ text: "Ask the fishermen.", nextStep: 0 }, { text: "Approach the shady figure.", nextStep: 1 }, { text: "Talk to the merchants.", nextStep: 2 }],
/*1*/[{ text: "Talk to the Merchants", nextStep: 2 }, { text: "Go to the Warehouse", nextStep: 3 }, { text: "Look for the shady Figure", nextStep: 4 }],
/*2*/[{ text: "Introduce yourself and ask if he knows about the stolen portrait.", nextStep: 5 }, { text: "Grab his arm and demand information.", nextStep: 6 }, { text: "Threaten him with legal consequences if he doesn't cooperate.", nextStep: 7 }],
/*3*/[{ text: "Ask the Fishermen", nextStep: 0 }, { text: "Look for the shady Figure", nextStep: 4 }, { text: "Search for the local artist", nextStep: 9 }],
/*4*/[{ text: "Try to break open the door", nextStep: 10 }, { text: "Try to find a open window or a way inside.", nextStep: 11 }, { text: "Lockpick the closed door", nextStep: 13 }],
/*5*/[{ text: "Offer him a reward for information.", nextStep: 14 }, { text: "Mention the Queen's wrath if he withholds information.", nextStep: 15 }, { text: "Ask about any suspicious activities he might have witnessed", nextStep: 16 }],
/*6*/[{ text: "Run from the guards", nextStep: 17 }, { text: "Explain everything to the Guards", nextStep: 18 }, { text: "Calm the Shady person and offer him payment for information.", nextStep: 19 }],
/*7*/[{ text: "Introduce yourself and explain the situation.", nextStep: 20 }, { text: "Throw something at him to stop him from potentially running ask him about the portrait.", nextStep: 21 }, { text: "Try to catch him and ask him about the Portrait", nextStep: 22 }],
/*8*/[{ text: "Continue", nextStep: 24 }, { text: "Continue", nextStep: 24 }, { text: "Continue", nextStep: 24 }],
/*9*/[{ text: "Gameover" }, { text: "Gameover" }, { text: "Gameover" }],
/*10*/[{ text: ""}, { text: ""}, { text: ""}, ]
];

const descriptionTexts = [
/*0*/     { text: "The fishermen mention seeing a suspicious person sneaking around the warehouses.", buttons: 1 },
/*1*/     { text: "As you approach, the figure notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*2*/     { text: "A merchant recognizes the portrait and points you to a local artist living in a warehouse who might have more information.", buttons: 3 },
/*3*/     { text: "You arrived at the Warehouse as described by the Merchant. It seems to be closed", buttons: 4 },
/*4*/     { text: "After looking out for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It's a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*5*/     { text: "You decide to take a diplomatic approach. 'I am a detective of the crown, and I heard you might have information about a stolen portrait. Care to share?'", buttons: 5 },
/*6*/     { text: "The man reacts defensively, attracting attention from nearby guards.", buttons: 6 },
/*7*/     { text: "The man, fearing legal repercussions, spills the rumors he heard. About a Artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.", buttons: 4 },
/*8*/     { text: "After looking for the shady Figure you find it and it notices you and tries to blend into the crowd. Quick on your feet, you close the gap. It is a hooded man, glancing nervously around. 'What do you want?' he asks.", buttons: 2 },
/*9*/     { text: "You follow the tracks of the artist to a closed Warehouse", buttons: 4 },
/*10*/    { text: "You break open the door and see inside an Atelier with a young man painting.", buttons: 7 },
/*11*/    { text: "You find a open Window on the level above you. It appears you can climb up there and get in. Inside, you see an atelier with a young man painting.", buttons: 7 },
/*12*/    { text: "Inside, you see an atelier with a young man painting.", buttons: 7 },
/*13*/    { text: "You manage to lockpick the door and inside you see an Atelier with a young man painting.", buttons: 7 },
/*14*/    { text: "He gladly accepts the reward and shares information about a Artist living in a warehouse who might know more about this painting.", buttons: 4 },
/*15*/    { text: "The man, fearing legal repercussions, spills the rumours he heard. About a Artist living in a warehouse who might have more information. Following this description you arrive at a closed Warehouse.", buttons: 4 },
/*16*/    { text: "He can not recall any suspicious activity.", buttons: 5 },
/*17*/    { text: "You did not manage to escape the guards and will be taken into custody. At the Time you explain everything and are allowed to set your foot free. The Thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9 },
/*18*/    { text: "The do not believe you and you will be taken into custody. At the Time you explain everything and are allowed to set your foot free. The Thief already escaped you did not manage to catch him before. The punishment of your Queen will be severe.", buttons: 9 },
/*19*/    { text: "He accepts your offer an tells you about an Artist living in the Warehouse down the street, who might have more Information.", buttons: 4 },
/*20*/    { text: "He listens to you, and tells you about a meeting point in the near Tavern, the Thief wants to sell the Portrait", buttons: 8 },
/*21*/    { text: "You hit him in the back, under pain and scared for his wellbeing he tells you about a meeting in the near Tavern, where the thief wants to sell the portrait.", buttons: 8 },
/*22*/    { text: "You caught him, under intense Pressuer, he tells you about a meeting point in the near Tavern, the Thief wants to sell the portrait", buttons: 8 },
/*23*/    "He tells you about a meeting point in the near Tavern of the Thief who wants to sell the Portrait.",
/*24*/    { text: "You head to the Tavern, it is lively, filled with sailors and locals enjoying their drinks. As you enter, everybody is looking at you. The air is suddenly thick with tension. (To be continued)", buttons: 10}
];

updateStory("You find yourself standing at the bustling docks of Eldoria, a medieval city bathed in the warm glow of the setting sun. Your mission is clear - to hunt down a thief who stole a precious portrait of the Queen.");
updateButtonLabels(choiceTexts[currentStep]);

/**Function for the different Steps.
 */
function makeChoice(choice) {
    handleStep(choice, descriptionTexts[currentStep]);
}

/**Function for the different Choices
 */
function handleStep(choice) {

    let nextdescriptionText = choiceTexts[currentStep][choice - 1].nextStep
    let descriptionText = descriptionTexts[nextdescriptionText]
    updateAttributes(nextdescriptionText);
    updateStory(descriptionText.text)
    updateButtonLabels(choiceTexts[descriptionText.buttons])
    currentStep = descriptionText.buttons;
}

function updateAttributes(descriptionTexts) {
    if (descriptionText.text.includes("break open the door") || descriptionText.text.includes("grab his arm")) {
        strength += 1;
    }
    if (descriptionText.text.includes("try to catch him") || descriptionText.text.includes("Try to find a open window or a way inside.")) {
        dexterity += 1;
    }
    if (descriptionText.text.includes("diplomatic approach") || descriptionText.text.includes("offer him payment for information") || descriptionText.text.includes("Lockpick the closed door")) {
        intelligence += 1;
    }

    updateAttributes();
}

/**Function to update the attributes */
function updateAttributes() {
    console.log("Updating attributes with:", descriptionText.text);
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
        button.textContent = labels[index].text;
    });
}