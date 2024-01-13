let strength = 5;
let dexterity = 5;
let intelligence = 5;

function makeChoice(choice) {
    switch (choice) {
        case 1:
            // Update attributes and story for choice 1
            strength += 2;
            updateAttributes();
            updateStory("You chose option 1. Something happens...");
            break;

        case 2:
            // Update attributes and story for choice 2
            dexterity += 2;
            updateAttributes();
            updateStory("You chose option 2. Something else happens...");
            break;

        case 3:
            // Update attributes and story for choice 3
            intelligence += 2;
            updateAttributes();
            updateStory("You chose option 3. Another twist in the story...");
            break;

        case 4:
            // Update attributes and story for choice 4
            updateStory("You chose option 4. The story takes an unexpected turn...");
            break;

        default:
            updateStory("Invalid choice. Try again.");
            break;
    }
}

function updateAttributes() {
    document.getElementById("strength").textContent = `Strength: ${strength}`;
    document.getElementById("dexterity").textContent = `Dexterity: ${dexterity}`;
    document.getElementById("intelligence").textContent = `Intelligence: ${intelligence}`;
}