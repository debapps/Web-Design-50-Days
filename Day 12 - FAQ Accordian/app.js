// Get the DOM elements.
const accordianCards = document.querySelectorAll(".accordian-card")


accordianCards.forEach((card) => {
    const icon = card.querySelector(".accordian-icon")

    icon.addEventListener("click", toggle)
})

function toggle(event) {
    const targetIcon = event.srcElement
    targetIcon.classList.toggle("fa-angle-down")
    targetIcon.classList.toggle("fa-circle-xmark")
    
    const targetCard = targetIcon.parentNode.parentNode
    targetCard.classList.toggle("active")

}