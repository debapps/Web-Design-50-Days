const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClass()
        panel.classList.add("active")
    })
})

function removeActiveClass() {
    // Get the panel with class active.
    const activePanel = document.querySelector(".active")

    // Remove the active class.
    activePanel.classList.remove("active")
}