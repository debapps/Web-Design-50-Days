// Get the Dom Element.
const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Add click event listener.
jokeBtn.addEventListener("click", async () => {
    const joke = await getRandomJoke();
    jokeContainer.innerText = joke;
});

// Fire the event for the first time
jokeBtn.dispatchEvent(new Event("click"));

// This function returns the random joke from API.
async function getRandomJoke() {
    // API endpoint.
    const url = "https://icanhazdadjoke.com";

    // API header.
    const header = new Headers({
        Accept: "application/json",
    });

    // Fetch options.
    const options = {
        method: "GET",
        headers: header,
    };

    // Call the API.
    const response = await fetch(url, options);

    // Get the data.
    const { id, joke, status } = await response.json();

    // Return the joke.
    if (status === 200) {
        return joke;
    }
}
