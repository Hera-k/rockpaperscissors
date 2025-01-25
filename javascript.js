//Get the computers choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 100);
    if(choice % 2 == 0){
        return "Rock";
    } else if(choice % 3 == 0){
        return "Scissors";
    } else{
        return "Paper";
    }
}
//Get the users  choice
function getHumanChoice(){
    let input = prompt("Choose between Rock, Paper or Scissors");
    return input;
}
//Keep track of scores
let compScore = 0;
let userScore = 0;



//function to play a round
function playRound(compChoice, userChoice){
    if((userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "paper")){
        userScore ++;
    } else if((userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "rock")){
        compScore++;
    } else if (userChoice == compChoice){
        compScore++;
        userScore++;
    }
}

//function to play the game
function playGame(){
    //selecting all the css elements
    const container = document.querySelector("#container");
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    const btn4 = document.querySelector("#btn4");
    

    //displaying results
    const yourScore = document.querySelector("#yourScore");
    const computerScore = document.querySelector("#computerScore");

    //to display the computer choice
    const computerChoiceButton = document.querySelector("#computerChoice");


    //div to show who won
    const div2 = document.querySelector("#Winner");

    //stop the game when one reaches 5
    function checkIfGameOver(){
        if(userScore >= 5 || compScore >= 5){
        div2.textContent = "Game Over";
        if (userScore > compScore){
            div2.textContent = "YOU WON!🥳";
        } else{
            div2.textContent = "YOU LOST!🙁";
        }
        
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
    }
}
    //to reset the scores
    btn4.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        div2.textContent = "";
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        div2.textContent = "...";
        yourScore.textContent = "Your score: " + userScore;
        computerScore.textContent = "Opponent score: " + compScore;

    })
    //adding event listeners to the buttons
        btn1.addEventListener("click", () => {
        computerChoice = getComputerChoice().toLowerCase();
        playRound(computerChoice, "rock");
        yourScore.textContent = "Your score: " + userScore;
        computerScore.textContent = "Opponent score: " + compScore;
        computerChoiceButton.textContent = "Opponent : " + computerChoice;
        checkIfGameOver();
        }
        );
        btn2.addEventListener("click", () => {
            computerChoice = getComputerChoice().toLowerCase();
            playRound(computerChoice, "paper");
            yourScore.textContent = "Your score: " + userScore;
            computerScore.textContent = "Opponent score: " + compScore;
            computerChoiceButton.textContent = "Opponent : " + computerChoice;

            checkIfGameOver();
        });

        btn3.addEventListener("click", () => {
            computerChoice = getComputerChoice().toLowerCase();
            playRound(computerChoice, "scissors");
            yourScore.textContent = "Your score: " + userScore;
            computerScore.textContent = "Opponent score: " + compScore;
            computerChoiceButton.textContent = "Opponent : " + computerChoice;
            checkIfGameOver();
        });
        
}
playGame();


