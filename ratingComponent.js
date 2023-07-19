//Bring HTML element

//- Cards
const cardRating = document.getElementById('rating-card');
const cardThankyu = document.getElementById('thankyou-card');

//-Rating buttons
const btnsScore = document.querySelectorAll('.btn-score'); 

//- botòn submit
const btnSubmit = document.querySelector('.btn-submit');

//-Score 
let score = 0;
const ratingChip = document.querySelector('.rating-chip');

//Hide Thank you card
cardThankyu.style.display = "none";

//if score btn is selected, the value is asignated to score variable
btnsScore.forEach((btn) => {
    btn.addEventListener("click", () => {
        score = btn.textContent;
    });
});

// if you click submit, the chip ake te value of the score 
btnSubmit.addEventListener("click", () => {
    cardRating.style.display = "none";
    cardThankyu.style.display = "flex";
    ratingChip.textContent = `You selected ${score} out of 5`;
});




