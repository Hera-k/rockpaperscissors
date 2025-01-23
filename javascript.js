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
    /*for(let i = 0; i < 5; i++){
        let compChoice = getComputerChoice().toLowerCase();
        let userChoice = getHumanChoice().toLowerCase();
        playRound(compChoice, userChoice);
        console.log("The user chose " + userChoice);
        console.log("The computer chose " + compChoice);    
    }*/
}

playGame();
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
container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);


btn1.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock");
    alert("Rock");
}
);
btn2.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
    alert("Paper")
});

btn3.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
    alert("Scissors");

});

 
