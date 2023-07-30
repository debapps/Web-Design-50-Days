const sounds = ["nature", "guiter", "piano", "applause", "taada", "victory"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    let prevSound = null;
    btn.innerText = sound;
    btn.addEventListener("click", () => {
        document.getElementById(sound).play();
    });

    document.querySelector(".buttons").appendChild(btn);
});
