// Get the DOM elements.
const boxes = document.querySelectorAll(".container");

// Add the scroll listeners.
window.addEventListener("scroll", showBoxes);

// This function shows the boxes in the viewport.
function showBoxes() {
    const triggerButtom = (window.innerHeight / 5) * 3;

    boxes.forEach((box) => {
        // Get the top of the box.
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButtom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}

showBoxes();
