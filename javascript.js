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

//function to play the game, 5 rounds each
function playGame(){
    //get the Computer and user choice
    let compChoice = getComputerChoice().toLowerCase();
    let userChoice = getHumanChoice().toLowerCase();
    for(let i = 0; i < 5; i++){
        compChoice = getComputerChoice().toLowerCase();
        userChoice = getHumanChoice().toLowerCase();
        playRound(compChoice, userChoice);
        console.log("The user chose " + userChoice);
        console.log("The computer chose " + compChoice);    
    }
}

playGame();
console.log(userScore);
console.log(compScore);
