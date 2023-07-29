// Progress Steps functionalities.

// Get the DOM elements.
const progressBar = document.querySelector("#progress");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

nextBtn.addEventListener("click", () => {
    currentActive++;

    // Enable the prev button.
    prevBtn.disabled = false;

    // Check if the active counts goes over the allowable count.
    // In such case disable the next button.
    if (currentActive === circles.length) {
        nextBtn.disabled = true;
    }

    updateProgress();
});

prevBtn.addEventListener("click", () => {
    currentActive--;

    // Enable the next button.
    nextBtn.disabled = false;

    // Check if the active counts goes over the allowable count.
    // In such case disable the next button.
    if (currentActive === 1) {
        prevBtn.disabled = true;
    }

    updateProgress();
});

function updateProgress() {
    // Add/Remove active class in progress
    circles.forEach((circle, idx) => {
        if (currentActive > idx) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Get percentage of progress
    const progressPercentage = `${
        ((currentActive - 1) / (circles.length - 1)) * 100
    }%`;

    // Set the progress bar width.
    progressBar.style.width = progressPercentage;
}
