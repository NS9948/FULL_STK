let red  = document.querySelector("#red")
let blue = document.querySelector("#blue")
let green  = document.querySelector("#green")
let random = document.querySelector("#random")
let mainbody = document.querySelector("#mainbody")

red.addEventListener("click", () => {
    mainbody.style.backgroundColor = "red";
})

blue.addEventListener("click", () => {
    mainbody.style.backgroundColor = "blue";
})

green.addEventListener("click", () => {
    mainbody.style.backgroundColor = "green";
})

let randomColors = ["red","blue","green"];

random.addEventListener("click", () =>{
    let randomNo = Math.floor(Math.random() * 3);
    if(randomNo === 0) mainbody.style.backgroundColor = "red";
    else if(randomNo === 1) mainbody.style.backgroundColor = "green";
    else mainbody.style.backgroundColor = "blue";
})