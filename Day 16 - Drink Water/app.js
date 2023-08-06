// Get the DOM elements.
const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percent = document.getElementById("percent");

// Initial state of the big cup.
updateBigCup();

// Add click event listener for small cups.
smallCups.forEach((smallCup, idx) => {
    smallCup.addEventListener("click", () => {
        updateSmallCups(idx);
    });
});

// This function fills or makes empty small cups.
function updateSmallCups(idx) {
    if (smallCups[idx].classList.contains("full")) {
        // Get how many small cups are filled.
        const fillCupsCount = getNumberOfFilledCups();

        // Empty all the cups till that is clicked.
        while (idx < fillCupsCount) {
            smallCups[idx].classList.remove("full");
            idx++;
        }
    } else {
        // Fill all the cups till that is clicked.
        while (idx >= 0) {
            smallCups[idx].classList.add("full");
            idx--;
        }
    }

    // Update the status of big cup.
    updateBigCup();
}

// This function update the big cup values.
function updateBigCup() {
    // Get how many small cups are filled.
    const fillCupsCount = getNumberOfFilledCups();

    // Get total milli liter water is filled.
    const ml = fillCupsCount * 250;

    // Calculate the percentage (total 2L = 2000 ml).
    const total = 2000;
    const percentage = (ml / total) * 100;

    if (percentage === 0) {
        percent.style.display = "none";
    } else {
        percent.style.display = "flex";
    }

    // Calculate the remaining liters.
    const remaining = (total - ml) / 1000;

    // Set the values of fill percentage and remaining liters.
    percent.innerText = `${percentage}%`;
    percent.style.height = `${percentage}%`;
    liters.innerText = `${remaining} L`;

    if (remaining === 0) {
        remained.style.height = 0;
        remained.style.visibility = "hidden";
    } else {
        remained.style.height = `${100 - percentage}%`;
        remained.style.visibility = "visible";
    }
}

// This function returns the number of small cups those are full at any moment.
function getNumberOfFilledCups() {
    return document.querySelectorAll(".full").length;
}
