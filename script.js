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
        console.log("You tie! You both choose "+playerChoice);
        return 0;
    }
    if(playerChoice=="rock"){
        if(computerChoice=="paper"){
            console.log("You loose! The Computers Paper beats your Rock");
            return -1;
        }
        else{
           console.log("You Win! Your Rock beats the Computer's Scissors");
           return 1;
        }
    }
    else if(playerChoice=="paper"){
        if(computerChoice=="rock"){
            console.log("You Win! Your Paper beats the Computers Rock");
            return 1;
        }
        else{
            console.log("You lose! The Computers Scissors beat your Paper");
            return -1;
        }
    }
    else{
        if(computerChoice=="rock"){
            console.log("You loose! The Computers Rock beat your Scissors");
            return -1;
        }
        else{
            console.log("You Win! Your Scissors beat the Computers paper");
            return 1;
        }
    }
}
function playGame(){
    let win=0,lose=0;
    for(let i=0;i<5;i++){
        console.log("You:"+win+" Computer:"+lose);
        let playerChoice=window.prompt("What do you choose?");
        let result=playRound(playerChoice,getComputerChoice());
        if(result==1){
            win++;
        }
        else if(result==-1){
            lose++;
        }
        else{
            win++;
            lose++;
        }
    }
    console.log("Final Score");
    console.log(`You: ${win} Computer: ${lose}`);
    if(win>lose){
        console.log("Overrall You Win");
    }
    else if(win<lose){
        console.log("Overrall You lose");
    }
    else{
        console.log("Overral You Tie");
    }
}
playGame();