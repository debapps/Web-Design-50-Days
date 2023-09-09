const boxes = document.querySelectorAll(".box");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

boxes.forEach((box) => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("drop", dragDrop);
});

function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
    this.className = "fill";
}

function dragEnter(event) {
    event.preventDefault();
    event.target.classList.add("hovered");
}

function dragLeave(event) {
    event.target.classList.remove("hovered");
}

function dragOver(event) {
    event.preventDefault();
    event.target.classList.add("hovered");
}

function dragDrop() {
    this.className = "box";
    this.appendChild(fill);
}
