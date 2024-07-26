function returnToMainMenu(){
    location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listener to the return button
    document.getElementById('returnButton').addEventListener('click', returnToMainMenu);
});