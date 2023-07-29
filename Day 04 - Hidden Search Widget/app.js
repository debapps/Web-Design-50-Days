// Get the DOM element.
const searchContainer = document.querySelector(".search-container")
const searchBtn = document.querySelector(".search-btn")
const searchBar = document.querySelector(".search-bar")

// Add click event listeners.
searchBtn.addEventListener("click", () => {
    searchContainer.classList.toggle("active")
    searchBar.focus()
})