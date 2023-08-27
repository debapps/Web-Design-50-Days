// List of months.
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// List of week days.
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satureday",
];

// This function formats date into Month DD, YYYY format.
function getDateFormatted(d) {
    // Date formatting.
    const formatDate = `${weekdays[d.getDay()]}, ${
        months[d.getMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;

    return formatDate;
}

function getTimeFormatted(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let meridian = null;

    if (hour < 12) {
        meridian = "AM";
    } else {
        meridian = "PM";
        hour = hour - 12;
    }

    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minute < 10) {
        minute = `0${minute}`;
    }

    const formatTime = `${hour} : ${minute} ${meridian}`;
    return formatTime;
}

// Get the DOM Elements.
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");

// The needles.
const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");

// moveHourNeedle();

function displayDateTime() {
    // Get current date time.
    const currentDate = new Date();

    dateEl.innerText = getDateFormatted(currentDate);
    timeEl.innerHTML = getTimeFormatted(currentDate);

    // Get the current second.
    const second = currentDate.getSeconds();

    // Rotate the second needle.
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${
        second * 6
    }deg)`;
}

function moveMinuteHourNeedle() {
    // Get current date time.
    const currentDate = new Date();

    // Get the current minute.
    const minute = currentDate.getMinutes();

    // Rotate the minute needle.
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${
        minute * 6
    }deg)`;

    // Get the current hour.
    let hour = currentDate.getHours();

    if (hour > 12) {
        hour = hour - 12;
    }

    let hourAngle = hour * 30 + minute / 12;

    // Rotate the hour needle.
    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
}

setInterval(displayDateTime, 1);
setInterval(moveMinuteHourNeedle, 60);

// Set the dark mode.
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
    if (toggleBtn.innerText === "Dark Mode") {
        toggleBtn.innerText = "Light Mode";
    } else if (toggleBtn.innerText === "Light Mode") {
        toggleBtn.innerText = "Dark Mode";
    }

    document.documentElement.classList.toggle("dark");
});
