// Get the DOM elements.
const tagsEl = document.getElementById("tags")
const textArea = document.getElementById("textarea")

// Listen to the keyup event.
textArea.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        // Clear the textarea.
        setTimeout(() => {
            event.target.value = ""
        }, 100)

        // Select random tags.
        selectRandomTag()
    } else {
        createTags(event.target.value)
    }
})


// This function create tags based on textarea input.
function createTags(input) {
    // Get the list of tags from the input.
    const tags = input.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim())

    // Clear the tag element
    tagsEl.innerHTML = ""

    // Create a tag and add to the tag element.
    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });    
}

// This function selects the random tags.
function selectRandomTag() {
    const times = 30
    const interval = setInterval(() => {
        const randomEl = pickRandomTag()
        toggleHighlight(randomEl)

        setTimeout(() => {toggleHighlight(randomEl)}, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomEl = pickRandomTag()
            toggleHighlight(randomEl)
        }, 100)
    }, times * 100)
}

// This function picks the random tag.
function pickRandomTag() {
    const tagsElement = document.querySelectorAll(".tag")
    return tagsElement[Math.floor(Math.random() * tagsElement.length)]
}

// This function toogles the highlight class.
function toggleHighlight(node) {
    node.classList.toggle("highlight")
}