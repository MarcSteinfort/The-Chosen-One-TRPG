let strength = 5;
let dexterity = 5;
let intelligence = 5;

/**Function to edit the different choices.
 */
function makeChoice(choice) {
    switch (choice) {

        case 1:
            updateStory("You chose option 1. Something happens...");
            break;

        case 2:
            updateStory("You chose option 2. Something else happens...");
            break;

        case 3:
            updateStory("You chose option 3. Another twist in the story...");
            break;

        case 4:
            updateStory("You chose option 4. The story takes an unexpected turn...");
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
