// Get the DOM element.
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0+";

    setInterval(() => {
        updateCounter(counter);
    }, 2);
});

// This function updates the counter.
function updateCounter(counter) {
    const targetVal = parseInt(counter.getAttribute("data-target"));

    const incrementVal = targetVal / 500;
    const currentVal = parseInt(counter.innerText);

    if (currentVal < targetVal) {
        counter.innerText = `${Math.ceil(currentVal + incrementVal)}+`;
    } else {
        counter.innerText = `${targetVal}+`;
    }
}
