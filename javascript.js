
let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");

const results = document.querySelector(".results");

const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".computer-score");




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

function getHumanChoice(buttonClass){

    let userChoice = buttonClass;
    userChoice = userChoice.slice(0, -7);
    return userChoice;
    
}

function playRound(userChoice, computerChoice)
{
    console.log("Computer Choice: " + computerChoice);
    console.log("Your Choice: " + userChoice);

    if(computerChoice == userChoice)
    {
        results.textContent = (userChoice + " and " + computerChoice +" is a tie!");
        //console.log (userChoice + " and " + computerChoice +" is a tie!")
        return;
    }

    if(userChoice == "paper"){
        if(computerChoice == "scissors"){
            results.textContent = (computerChoice + " beats " + userChoice + "! You Lose.");
            //console.log(computerChoice + " beats " + userChoice + "! You Lose.");
            computerScore++;
        }
        else{
            results.textContent = (userChoice + " beats " +  computerChoice + "! You Win!");
            //console.log(userChoice + " beats " +  computerChoice + "! You Win!");
            humanScore++;
        }
    }

    if(userChoice == "scissors"){
        if(computerChoice == "rock"){
            results.textContent = (computerChoice + " beats " + userChoice + "! You Lose.");
            //console.log(computerChoice + " beats " + userChoice + "! You Lose.");
            computerScore++;
        }
        else{
            results.textContent = (userChoice + " beats " +  computerChoice + "! You Win!");
            //console.log(userChoice + " beats " +  computerChoice + "! You Win!");
            humanScore++;
        }
    }

    if(userChoice == "rock"){
        if(computerChoice == "paper"){
            results.textContent = (computerChoice + " beats " + userChoice + "! You Lose.");
            //console.log(computerChoice + " beats " + userChoice + "! You Lose.");
            computerScore++;
        }
        else{
            results.textContent = (userChoice + " beats " +  computerChoice + "! You Win!");
            //console.log(userChoice + " beats " +  computerChoice + "! You Win!");
            humanScore++;
        }
    }

    userScore.textContent = ("Player Score: "+ humanScore);
    compScore.textContent = ("Computer Score: "+ computerScore);

    if(humanScore == 5)
    {
        let winnerDiv = document.createElement("div");
        winnerDiv.textContent = "You Win!";
        winnerDiv.setAttribute("style", "color: pink; font-size: 36px")
        results.appendChild(winnerDiv);
    }

    if(computerScore == 5)
        {
            let winnerDiv = document.createElement("div");
            winnerDiv.textContent = "Computer Wins!";
            winnerDiv.setAttribute("style", "color: pink; font-size: 36px")
            results.appendChild(winnerDiv);
        }
    
}


function playGame(){
    for(let i=0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    userScore.textContent = ("Player Score: "+humanScore);
    //console.log("Player Score: "+humanScore);
    compScore.textContent = ("Computer Score: "+computerScore);
    //console.log("Computer Score: "+computerScore);
}

// playGame();

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      
      playRound(getHumanChoice(button.className), getComputerChoice());
  
    });
  });