// Get the DOM elements.
const boxes = document.querySelectorAll(".card");

// Observer API options.
const options = {
    // root: document.getElementsByTagName("body")[0],
    // rootMargin: "0px",
    threshold: 0.8,
};

// Intersection observer object.
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Get the current entry element.
        const elem = entry.target;

        // Make the element visible when it is intersecting.
        elem.classList.toggle("show", entry.isIntersecting);

        // Once visible stay on screen.
        // if (entry.isIntersecting) {
        //     observer.unobserve(elem);
        // }
    });
}, options);

boxes.forEach((box) => {
    observer.observe(box);
});
