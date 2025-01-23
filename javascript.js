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
    const container = document.querySelector("#container");
    const btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    btn1.textContent = "Rock";
    const btn2 = document.createElement("button");
    btn2.classList.add("btn2");
    btn2.textContent = "Paper";
    const btn3 = document.createElement("button");
    btn3.classList.add("btn3");
    btn3.textContent = "Scissors";
    const btn4 = document.createElement("button");
    btn4.classList.add("btn4");
    btn4.textContent = "Reset";
    container.appendChild(btn1);
    container.appendChild(btn2);
    container.appendChild(btn3);
    container.appendChild(btn4);
    

    //displaying results
    const div = document.createElement("div");
    container.appendChild(div);

    //div to show who won
    const div2 = document.createElement("div");
    div2.classList.add("div2");
    container.appendChild(div2);

    //stop the game when one reaches 5
    function checkIfGameOver(){
        if(userScore > 5 || compScore > 5){
        div.textContent = "Game Over";
        if (userScore > compScore){
            div2.textContent = "YOU WON!!!!";
        } else{
            div2.textContent = "YOU LOST!!!!";
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
        div.textContent = "The user's score is " + userScore + " and the Computer's score is " + compScore;

    })
    //adding event listeners to the buttons
        btn1.addEventListener("click", () => {
        computerChoice = getComputerChoice().toLowerCase();
        playRound(computerChoice, "rock");
        div.textContent = "The user's score is " + userScore + " the computer chose "+ computerChoice + " and the Computer's score is " + compScore;
        checkIfGameOver();
        }
        );
        btn2.addEventListener("click", () => {
            computerChoice = getComputerChoice().toLowerCase();
            playRound(computerChoice, "paper");
            div.textContent = "The user's score is " + userScore + " the computer chose "+ computerChoice + " and the Computer's score is " + compScore;
            checkIfGameOver();
        });

        btn3.addEventListener("click", () => {
            computerChoice = getComputerChoice().toLowerCase();
            playRound(computerChoice, "scissors");
            div.textContent = "The user's score is " + userScore + " the computer chose "+ computerChoice + " and the Computer's score is " + compScore;
            checkIfGameOver();
        });
        
}

playGame();


