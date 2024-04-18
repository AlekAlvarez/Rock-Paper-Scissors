function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}
function playRound(playerChoice, computerChoice){
    playerChoice=playerChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    if(playerChoice==computerChoice){
        return "You tie! You both choose "+playerChoice;
    }
    if(playerChoice=="rock"){
        if(computerChoice=="paper"){
            return "You loose! The Computers Paper beats your Rock";
        }
        else{
            return "You Win! Your Rock beats the Computer's Scissors";
        }
    }
    else if(playerChoice=="paper"){
        if(computerChoice=="rock"){
            return "You Win! Your Paper beats the Computers Rock";
        }
        else{
            return "You lose! The Computers Scissors beat your Paper";
        }
    }
    else{
        if(computerChoice=="rock"){
            return "You loose! The Computers Rock beat your Scissors";
        }
        else{
            return "You Win! Your Scissors beat the Computers paper";
        }
    }
}