let button = document.querySelector("#checkWeather");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let desc = document.querySelector("#desc");
let area = document.querySelector("#area");

button.addEventListener("click", async () =>{
    try{
        let response = await fetch("https://wttr.in/?format=j1")
        let data = await response.json();

        temperature.textContent = data.current_condition[0].FeelsLikeC + "°C";
        humidity.textContent = data.current_condition[0].humidity + "%";
        desc.textContent = data.current_condition[0].weatherDesc[0].value;

    }catch(err){
        temperature.textContent = "Not Available";
        humidity.textContent = "Not Available";
        desc.textContent = "Unable to fetch the data";

        console.log(err);
    }
});