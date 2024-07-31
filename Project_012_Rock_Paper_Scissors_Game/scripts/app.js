let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const resultMsg = document.querySelector("#result-msg");
const resultMsgContainer = document.querySelector(".result-msg-container");
const userScoreText = document.querySelector(".user-score");
const compScoreText = document.querySelector(".computer-score");
const resetButton = document.querySelector("#reset-button");
const userChoiceText = document.querySelector(".your-choice-text");
const compChoiceText = document.querySelector(".computer-choice-text");
const compChoiceContainer = document.querySelector("#comp-choice");

let generateCompChoice = () => {
    let choice_opt = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3);
    compChoice = choice_opt[index];
    return compChoice;
}

const drawGame = () => {
    resultMsg.innerText = "Game Drawn";
    resultMsgContainer.style.backgroundColor = "#437f97";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScoreText.innerText = userScore;
        resultMsg.innerText = "You Win";
        resultMsgContainer.style.backgroundColor = "#018e42";
    }
    else{
        compScore++;
        compScoreText.innerText = compScore;
        resultMsg.innerText = "Computer Win";
        resultMsgContainer.style.backgroundColor = "#bf1a2f";
    }
}

function showCompChoice(compChoice){
    compChoiceContainer.style.display = "block";
    if(compChoice == "rock"){
        compChoiceContainer.setAttribute("src","assets/images/rock.png");
    }
    else if(compChoice == "paper"){
        compChoiceContainer.setAttribute("src","assets/images/paper.png");
    }
    else{
        compChoiceContainer.setAttribute("src","assets/images/scissor.png");
    }
}

const playGame = (userChoice) => {
    userChoiceText.innerText = userChoice.toUpperCase();
    const compChoice = generateCompChoice();
    showCompChoice(compChoice);
    compChoiceText.innerText = compChoice.toUpperCase();
    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice == "scissor" ? false : true;
        }
        else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach(choice => {
    function userInput(){
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }
    choice.addEventListener("click",userInput);
})

function resetGame(){
    userScore = 0;
    compScore = 0;
    userScoreText.innerText = userScore;
    compScoreText.innerText = compScore;
    resultMsg.innerText = "Make Move";
    resultMsgContainer.style.backgroundColor = "#cfd11a";
    userChoiceText.innerText = "";
    compChoiceText.innerText = "";
    compChoiceContainer.style.display = "none";
}
resetButton.addEventListener("click",resetGame);