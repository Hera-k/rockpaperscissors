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
function getHumanChoice(){
    let input = prompt("Choose between Rock, Paper or Scissors");
    return input;
}
