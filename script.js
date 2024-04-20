let win=0;let loss=0;
const round=document.querySelector("#round");
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
        round.innerText="You tie! You both choose "+playerChoice;
        return 0;
    }
    if(playerChoice=="rock"){
        if(computerChoice=="paper"){
            round.innerText="You loose! The Computers Paper beats your Rock";
            return -1;
        }
        else{
           round.innerText="You Win! Your Rock beats the Computer's Scissors";
           return 1;
        }
    }
    else if(playerChoice=="paper"){
        if(computerChoice=="rock"){
            round.innerText="You Win! Your Paper beats the Computers Rock";
            return 1;
        }
        else{
            round.innerText="You lose! The Computers Scissors beat your Paper";
            return -1;
        }
    }
    else{
        if(computerChoice=="rock"){
            round.innerText="You loose! The Computers Rock beat your Scissors";
            return -1;
        }
        else{
            round.innerText="You Win! Your Scissors beat the Computers paper";
            return 1;
        }
    }
}
function updateScore(){
    const div=document.querySelector("#results");
    if(win<5&&loss<5){
    div.innerText=`You:${win} Computer${loss}`;
    }
    else{
        if(win>=5){
            div.innerText="You Win";
        }
        else{
            div.innerText="All hail the machines you lose";
        }
    }

}
document.addEventListener("load",updateScore());
const rock=document.querySelector("#R");
const paper=document.querySelector("#P");
const scissors=document.querySelector("#S");
rock.addEventListener("click",()=>{
    let score=playRound("rock",getComputerChoice());
    if(score>0){
        win++;
    }  
    if(score<0){
        loss++;
    }
    updateScore();
});
paper.addEventListener("click",()=>{
    let score=playRound("paper",getComputerChoice());
    if(score>0){
        win++;
    }  
    if(score<0){
        loss++;
    }
    updateScore();
});
scissors.addEventListener("click",()=>{
    let score=playRound("scissors",getComputerChoice());
    if(score>0){
        win++;
    }  
    if(score<0){
        loss++;
    }
    updateScore();
});