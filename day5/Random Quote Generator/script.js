let button = document.querySelector("#getQuote");
let author = document.querySelector("#author");
let quote = document.querySelector("#quote");
button.addEventListener("click", async () => {
    try {
        quote.textContent = "Loading...";
        author.textContent = "";
        
        let response = await fetch("https://api.quotable.io/random");
        let data = await response.json();

        author.textContent = "~" + data.author;
        quote.textContent = data.content;

    } catch (err) {
        quote.textContent = "Failed to load quote.";
        console.error(err);
    }
});

