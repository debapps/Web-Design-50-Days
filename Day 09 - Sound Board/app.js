// List of sounds.
const sounds = ["nature", "guiter", "piano", "applause", "taada", "victory"];

sounds.forEach((sound) => {
    // Create a button for each sound.
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    // Add click event listener.
    btn.addEventListener("click", () => {
        stopMusic();
        document.getElementById(sound).play();
    });

    // Add the button to the DOM.
    document.querySelector(".buttons").appendChild(btn);
});

// Stops the all music music.
function stopMusic() {
    sounds.forEach((sound) => {
        const music = document.getElementById(sound);
        music.pause();
        music.currentTime = 0;
    });
}
