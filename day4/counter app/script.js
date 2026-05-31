let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let increment = document.querySelector("#increment");
let counterValue = document.querySelector("#counterValue");

decrement.addEventListener("click", () => {
    if(counterValue.textContent > 0){
        counterValue.textContent = Number(counterValue.textContent) - 1;
    }else{
        alert("The counter is already set to 0");
    }
    
})

increment.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
})

reset.addEventListener("click", () => {
    counterValue.textContent = 0;
})