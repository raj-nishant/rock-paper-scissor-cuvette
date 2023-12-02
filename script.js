// Define possible choices for the game
const gameChoices = ["rock", "paper", "scissor"];

// Generating a random choice for the computer player
function getRandomChoice() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

// Images click event
let userRock = document.getElementById("fist");
let userPaper = document.getElementById("hand");
let userScissor = document.getElementById("scissor");
let computerChoice;

// Scores functions
let playerScore = 0;
function changePlayerScore(score) {
  document.getElementById("mscore").innerHTML = score;
}
let computerScore = 0;
function changeComputerScore(score) {
  document.getElementById("cscore").innerHTML = score;
}

// Getting IDs
let userRockWin = document.getElementById("fistwinuser");
let userPaperWin = document.getElementById("handwinuser");
let userScissorWin = document.getElementById("scissorwinuser");

let computerRockWin = document.getElementById("fistwinpc");
let computerPaperWin = document.getElementById("handwinpc");
let computerScissorWin = document.getElementById("scissorwinpc");

const footerElement = document.getElementById("foot");
const leftElement = document.getElementById("leftd");
const rightElement = document.getElementById("rightd");
const resultTextElement = document.getElementById("winlosetext");

const nextButton = document.getElementById("nextbtn");

// Very Important IDs
const container1 = document.getElementById("cont1");
const container2 = document.getElementById("cont2");

let playButton = document.getElementById("playbtn");

// Rules button and boxes
const toggleButton = document.getElementById("btn");
const toggleDiv = document.getElementById("rule");
const closeButton = document.getElementById("cross");

toggleButton.addEventListener("click", () => {
  console.log("clicked");
  toggleDiv.classList.remove("hidden");
  closeButton.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  toggleDiv.classList.add("hidden");
  closeButton.classList.add("hidden");
});

playButton.addEventListener("click", function () {
  playButton.classList.add("hidden");
  nextButton.classList.add("hidden");
  resultTextElement.classList.add("hidden");
  footerElement.classList.remove("hidden");
  leftElement.classList.add("hidden");
  rightElement.classList.add("hidden");

  userRockWin.classList.add("hidden");
  userRockWin.classList.remove("rounded-gradient-borders");

  userPaperWin.classList.add("hidden");
  userPaperWin.classList.remove("rounded-gradient-borders");

  userScissorWin.classList.add("hidden");
  userScissorWin.classList.remove("rounded-gradient-borders");

  computerRockWin.classList.add("hidden");
  computerRockWin.classList.remove("rounded-gradient-borders");

  computerPaperWin.classList.add("hidden");
  computerPaperWin.classList.remove("rounded-gradient-borders");

  computerScissorWin.classList.add("hidden");
  computerScissorWin.classList.remove("rounded-gradient-borders");
});

function afterClick() {
  resultTextElement.classList.remove("hidden");
  playButton.classList.remove("hidden");
  footerElement.classList.add("hidden");
  leftElement.classList.remove("hidden");
  rightElement.classList.remove("hidden");
}

function winGame() {
  document.getElementById("text1").innerHTML = "You WIN";
  playButton.innerHTML = "Play Again";
  nextButton.classList.remove("hidden");
}

function loseGame() {
  document.getElementById("text1").innerHTML = "You LOSE";
  playButton.innerHTML = "Play Again";
}

function tieGame() {
  document.getElementById("text1").innerHTML = "Tie UP";
  playButton.innerHTML = "Replay";
}

nextButton.addEventListener("click", function () {
  nextButton.classList.add("hidden");
  container1.classList.add("hidden");
  container2.classList.remove("hidden");
});

userRock.addEventListener("click", function () {
  computerChoice = getRandomChoice();
  afterClick();
  userRockWin.classList.remove("hidden");
  if (computerChoice === "rock") {
    computerRockWin.classList.remove("hidden");
    tieGame();
  } else if (computerChoice === "paper") {
    computerPaperWin.classList.remove("hidden");
    computerPaperWin.classList.add("rounded-gradient-borders");
    loseGame();
    computerScore++;
    changeComputerScore(computerScore);
  } else {
    computerScissorWin.classList.remove("hidden");
    userRockWin.classList.add("rounded-gradient-borders");
    winGame();
    playerScore++;
    changePlayerScore(playerScore);
  }
});

userPaper.addEventListener("click", function () {
  computerChoice = getRandomChoice();
  afterClick();
  userPaperWin.classList.remove("hidden");
  if (computerChoice === "paper") {
    computerPaperWin.classList.remove("hidden");
    tieGame();
  } else if (computerChoice === "scissor") {
    computerScissorWin.classList.remove("hidden");
    computerScissorWin.classList.add("rounded-gradient-borders");
    loseGame();
    computerScore++;
    changeComputerScore(computerScore);
  } else {
    winGame();
    userPaperWin.classList.add("rounded-gradient-borders");
    computerRockWin.classList.remove("hidden");
    playerScore++;
    changePlayerScore(playerScore);
  }
});

userScissor.addEventListener("click", function () {
  computerChoice = getRandomChoice();
  afterClick();
  userScissorWin.classList.remove("hidden");
  if (computerChoice === "scissors") {
    computerScissorWin.classList.remove("hidden");
    tieGame();
  } else if (computerChoice === "rock") {
    loseGame();
    computerScore++;
    changeComputerScore(computerScore);
    computerRockWin.classList.remove("hidden");
    computerRockWin.classList.add("rounded-gradient-borders");
  } else {
    winGame();
    playerScore++;
    changePlayerScore(playerScore);
    computerPaperWin.classList.remove("hidden");
    userScissorWin.classList.add("rounded-gradient-borders");
  }
});
