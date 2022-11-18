

// ___________________________1. Random No generation _____________________________________
let secretNumber = (Math.trunc(Math.random() * 20)) + 1
const displayMessage=function(message){
    document.querySelector(".message").textContent=message;
}

// document.querySelector(".guess").textContent=secretNumber;
// ___________________________2. Setting Score to 0 _______________________________________
let score = 20;
let high = 0;
document.querySelector(".score_value").textContent = score;
// ___________________________3. Game logic _______________________________________________
function guessed() {
    const guess = Number(document.querySelector(".num_guess").value)
    console.log(guess)
    if (!guess) {
        // document.querySelector(".message").textContent = "Not Guessed"
        displayMessage("Not Guessed")
        document.querySelector('.guess').style.backgroundColor = "red";
    }
    //_______________________ 3.1 work only when score is greater than 0 __________________
    else if (score > 1) {
        if (guess === secretNumber) {
            document.querySelector(".message").textContent = "Congrats U won"
            // ------------------------ Keeps high score-----------------
            if (score > high) {
                high=score;
                document.querySelector(".high_value").textContent = high;
            }
           
          
            // <<<<<<<<<<<<<<<<< end of if else
            document.querySelector('body').style.backgroundColor = "#56AA3F";
            document.querySelector('.guess').style.color = "black";
            document.querySelector('.guess').style.backgroundColor = "white";
            document.querySelector('.guess').style.width = "12rem";
            document.querySelector(".guess").textContent = secretNumber;
        }
        // ______________________ 3.2 Decrease score by 1 on wrong guess_______________________
        else if (guess!== secretNumber) {
            document.querySelector(".message").textContent = guess>secretNumber?"Too high":"Too Low"
            score--;
            document.querySelector(".score_value").textContent = score;
            document.querySelector('.guess').style.backgroundColor = "red";

        }
    }
    // _____________________________ End game point____________________________________________
    else {
        document.querySelector(".score_value").textContent = 0;
        document.querySelector(".message").textContent = "You Loose"
    }
}


// ______________________________ Game start event ________________________________________
document.querySelector(".check").addEventListener('click', guessed)

// ______________________________ Again Button Functionality ______________________________
document.querySelector(".again").addEventListener('click', function () {
    score = 20;
    secretNumber = (Math.trunc(Math.random() * 20) + 1);
    document.querySelector(".score_value").textContent = score;
    document.querySelector(".message").textContent = "Start Guessing !";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector("input").value = "";
    document.querySelector('.guess').style.backgroundColor = "white";
    document.querySelector(".guess").textContent = "?";
})

