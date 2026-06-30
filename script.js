

let buttonArray = null;

const numbers = [];

for(let i = 0; i < 5; i++){
    buttonArray = document.createElement("button");
    numbers[i] = i+1;
    buttonArray.textContent = numbers[i];
    document.querySelector(".rating-button").appendChild(buttonArray);
    // buttonArray.style.backgroundColor = "blue";

}
