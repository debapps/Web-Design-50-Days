// This function maps one ranges of numbers
// to another range of numbers.
function scaleRange(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Get the DOM elements.
const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

// Perform the blur effect on every 60 milli-seconds.
const intervalID = setInterval(blurEffect, 30);

// Initialize the load value.
let load = 0;

// This function perform the blur effect.
function blurEffect() {
    // Increment load counter.
    load++;

    if (load > 99) {
        //Stop the effect.
        clearInterval(intervalID);
    }

    // Increment the load counter.
    loadText.innerHTML = `${load}%`;

    // Blur the load counter.
    loadText.style.opacity = `${scaleRange(load, 0, 101, 1, 0)}`;

    // Visible the image.
    bg.style.filter = `blur(${scaleRange(load, 0, 100, 50, 0)}px)`;
}
