function startgame(){
    location.href = "game.html";
}
function credits(){
    location.href = "credits.html";
}
document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listener to the startgame button
    document.getElementById('startgame').addEventListener('click', startgame);
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listener to the startgame button
    document.getElementById('credits').addEventListener('click', credits);
});