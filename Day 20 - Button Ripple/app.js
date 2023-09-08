const rippleBtns = document.querySelectorAll(".ripple-btn");

rippleBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const buttonTop = event.target.offsetTop;
        const buttonLeft = event.target.offsetLeft;

        const xIn = x - buttonLeft;
        const yIn = y - buttonTop;

        const rippleCircle = document.createElement("span");
        rippleCircle.classList.add("circle");
        rippleCircle.style.top = yIn + "px";
        rippleCircle.style.left = xIn + "px";
        button.appendChild(rippleCircle);

        setTimeout(() => rippleCircle.remove(), 500);
    });
});
