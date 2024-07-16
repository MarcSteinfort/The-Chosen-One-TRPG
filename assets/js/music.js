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