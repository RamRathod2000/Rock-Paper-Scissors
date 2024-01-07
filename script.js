let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx];
};

const drawGame = () =>{
    msg.innerHTML = "Game was draw , play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;

        msg.innerHTML = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
    console.log("User Choice" , userChoice);
    // generate compChoice
    const compChoice = gencompChoice();

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor paper
            userWin = compChoice === "paper" ? false : true ;

        } else if(userChoice === "paper"){
            //rock scissor
            userWin = compChoice === "scissors" ? false:true;
        } else{
            //rock paper    
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});