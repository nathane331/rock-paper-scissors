
let humanScore = 0;
let comptuerScore = 0;


function getComputerChoice(){

    let decider = Math.random();

    if( decider <= 0.33)
    {
        return "rock";
    }
    else if(decider > 0.34 && decider <= 0.66)
    {
        return "paper";
    }
    else{
        return "scissors";
    }
    
}

function getHumanChoice(){

    let userChoice;

    while(true)
    {
        userChoice = prompt("Enter Rock, Paper, or Scissors!");

        userChoice.toLowerCase();
        if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")
        {
            break;
        }

    }
    return userChoice;
    
}

function playRound(userChoice, computerChoice)
{
    console.log("Computer Choice: " + computerChoice);
    console.log("Your Choice: " + userChoice);

    if(computerChoice == userChoice)
    {
        console.log (userChoice + " and " + computerChoice +" is a tie!")
        return;
    }

    if(userChoice == "paper"){
        if(computerChoice == "scissors"){
            console.log(computerChoice + " beats " + userChoice + "! You Lose.");
            comptuerScore++;
        }
        else{
            console.log(userChoice + " beats " +  computerChoice + "! You Win!");
            humanScore++;
        }
    }

    if(userChoice == "scissors"){
        if(computerChoice == "rock"){
            console.log(computerChoice + " beats " + userChoice + "! You Lose.");
            comptuerScore++;
        }
        else{
            console.log(userChoice + " beats " +  computerChoice + "! You Win!");
            humanScore++;
        }
    }

    if(userChoice == "rock"){
        if(computerChoice == "paper"){
            console.log(computerChoice + " beats " + userChoice + "! You Lose.");
            comptuerScore++;
        }
        else{
            console.log(userChoice + " beats " +  computerChoice + "! You Win!");
            humanScore++;
        }
    }

}
function playGame(){
    for(let i=0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Player Score: "+humanScore);
    console.log("Computer Score: "+comptuerScore);
}


playGame();

