// Image List.
const imgList = [
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    "https://images.unsplash.com/photo-1624995766025-f9d513e1cde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1614001269381-1f4bc62eecc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80",
    "https://images.unsplash.com/photo-1595311098506-3d06eda55262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80",
    "https://images.unsplash.com/photo-1619897194242-f719a4373c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1519&q=80",
    "https://images.unsplash.com/photo-1611183073673-f69b5675bfaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1594462814354-9da3577529a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    "https://images.unsplash.com/photo-1632061107068-a12b5271aa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
];

// Get the slider container.
const slideContainer = document.querySelector(".slide-container");

// For each image add the image div into the slide container.
imgList.forEach((img, idx) => {
    // Create a div.
    const imgDiv = document.createElement("div");

    // Add a class and background image style.
    imgDiv.classList.add("slide");
    imgDiv.style.backgroundImage = `url(${img})`;

    // For the initial image div add the active class.
    if (idx === 0) {
        imgDiv.classList.add("active");
    }

    // Append the image div as child of slide container.
    slideContainer.appendChild(imgDiv);
});

// This function adds the background image to the body of the page.
function addBodyImage(image) {
    // Get the body element.
    const bodyEl = document.getElementsByTagName("body")[0];

    // Add the background image property.
    bodyEl.style.backgroundImage = `url(${image})`;
    bodyEl.style.backgroundPositionX = "center";
    bodyEl.style.backgroundPositionY = "center";
    bodyEl.style.backgroundSize = "cover";
    bodyEl.style.backgroundRepeat = "no-repeat";
}

// Set the initial background image into body.
addBodyImage(imgList[0]);

// Get the list of slide divs and active image.
const slideEls = document.querySelectorAll(".slide");

// Get the left and right arrows.
const left = document.querySelector("#left");
const right = document.querySelector("#right");

// Event Listeners.
right.addEventListener("click", () => {
    const activeImgID = removeActiveImage();
    setNextActiveImage(activeImgID);
});

left.addEventListener("click", () => {
    const activeImgID = removeActiveImage();
    setPrevActiveImage(activeImgID);
});

// Remove the current active image and send the index of it.
function removeActiveImage() {
    activeImgID = null;
    slideEls.forEach((slide, idx) => {
        if (slide.classList.contains("active")) {
            activeImgID = idx;
            slide.classList.remove("active");
        }
    });

    return activeImgID;
}

// Set the next image as active.
function setNextActiveImage(imageID) {
    imageID++;

    if (imageID === slideEls.length) {
        addBodyImage(imgList[0]);
        slideEls[0].classList.add("active");
    } else {
        addBodyImage(imgList[imageID]);
        slideEls[imageID].classList.add("active");
    }
}

// Set the previous image as active.
function setPrevActiveImage(imageID) {
    if (imageID === 0) {
        addBodyImage(imgList[slideEls.length - 1]);
        slideEls[slideEls.length - 1].classList.add("active");
    } else {
        imageID--;
        addBodyImage(imgList[imageID]);
        slideEls[imageID].classList.add("active");
    }
}
