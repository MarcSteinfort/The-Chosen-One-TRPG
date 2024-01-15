/* Attributes*/
let strength = 5;
let dexterity = 5;
let intelligence = 5;


let currentStep = 1;

/*Arrays for Choices and descriptions*/
const choiceTexts = [
];

const descriptionText = [
];

/**Function to edit the different choices.
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
        case 4:
            handleStep4(choice);
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