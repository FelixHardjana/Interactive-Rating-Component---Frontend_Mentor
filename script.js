

let buttonArray = null;
let buttonPressed = null;

// const numbers = [];

const rating_span = document.querySelector("#rating-review");
const button_submit = document.getElementById("button-submit");


const main_rating_panel = document.querySelector(".main-rating-panel");
const rating_result = document.querySelector(".rating-result");

for(let i = 0; i < 5; i++){
    buttonArray = document.createElement("button");
    // numbers[i] = i+1;
    buttonArray.textContent = i+1;

    buttonArray.addEventListener("click", () => {
        buttonPressed = i+1;
    });

    document.querySelector(".rating-button").appendChild(buttonArray);
        
}

button_submit.addEventListener("click", () => {
    rating_span.textContent = buttonPressed; // this is to test out the rating
    main_rating_panel.style.display = "none";
    rating_result.style.display = "inline-flex"
});


