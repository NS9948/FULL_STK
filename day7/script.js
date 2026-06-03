let button = document.querySelector("button")
let input = document.querySelector("input")
let display = document.querySelector("#display")


button.addEventListener("click", async () => {
    
    try{
        display.textContent = "Loading..."
        let response = await fetch("https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com")
        let data = await response.json();

        display.textContent = "";
        let found = false;
        for(let userData of data){
            let userName = userData.name.toLowerCase()
            if(userName.includes(input.value.toLowerCase()) && input.value != ""){
                found = true;
                let card = document.createElement("div");
                card.innerHTML = `
                    <h3>Name of the User: ${userData.name}</h3>
                    <h3>Email: ${userData.email}</h3>
                    <h3>City: ${userData.address.city}</h3>
                `

                display.appendChild(card);
            }
        }
        if(!found){
            display.textContent =
            "User not found";
        }
    }
    catch(err){
        console.log(err);
        display.textContent = "Something went wrong";
    }
    
    
})