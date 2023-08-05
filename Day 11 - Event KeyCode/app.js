// Get the box container.
const boxContainer = document.querySelector(".box-container")

// Catch the keydown event.
window.addEventListener("keydown", (event) => {
    console.log(event)
    removeAllboxes()
    createBox("event.key", event.key === " " ? "Space": event.key)
    createBox("event.keyCode", event.keyCode)
    createBox("event.code", event.code)
    let location = null
    if (event.location === 1) {
        location = 'Left Key'
    } else if (event.location === 2) {
        location = 'Right Key'
    } else {
        location = 'N/A'
    }
    createBox("event.location", location)
    createBox("event.which", event.which)
})

// Remove all the boxes.
function removeAllboxes() {
    boxContainer.innerHTML = ""
}

// Create a box with heading and value.
function createBox(heading, value) {
    // Create the box element.
    const boxElement = document.createElement("div")
    boxElement.classList.add("box")

    // Create the box heading.
    const boxHeading = document.createElement("h3")
    boxHeading.classList.add("box-heading")
    boxHeading.innerText = heading

    // Create the box value.
    const boxValue = document.createElement("div")
    boxValue.classList.add("box-value")
    boxValue.innerText = value

    // Append the box heading and value into the box element.
    boxElement.appendChild(boxHeading)
    boxElement.appendChild(boxValue)

    // Append the box into box container.
    boxContainer.appendChild(boxElement)
}