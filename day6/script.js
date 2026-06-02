let button = document.querySelector("button");
let input = document.querySelector("input");
let display = document.querySelector("#display");
let resultCount = document.querySelector("#resultCount")


button.addEventListener("click", async () =>{
    if(input.value.trim() === ""){
        display.innerHTML = "<p>Please enter a show name</p>";
        return;
    }
    
    try{
        display.innerHTML = "<p>Loading...</p>";
        let response = await fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`);
        let data = await response.json();
        resultCount.textContent =`Movies Found: ${data.length}`;

        let found = false;
        display.innerHTML = "";
        for(let key of data){
            let movieName = key.show.name.toLowerCase();
            let imageSrc =key.show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
            let release = key.show.premiered;

            if(movieName.includes(input.value.toLowerCase()) && input.value != "") {
                found = true;
                
                let card = document.createElement("div");
                card.innerHTML = `
                    <img src = "${imageSrc}">
                    <h3>${movieName.toUpperCase()}</h3>
                    <p>${release}</p>
                `;

                display.appendChild(card);
                display.appendChild(resultCount);
            }
        }
        if(!found){
            resultCount.textContent = "Movies Found: 0";
            display.innerHTML = "<p>Search result not found</p>";
            display.appendChild(resultCount);
        }
    }catch(err){
        console.log(err);
    }
})