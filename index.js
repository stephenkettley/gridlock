let sequenceNumber = 1;
let guessNumber = 0;
let flashingSequence;
let guessSequence = [];

const allContent = document.createElement("div");
allContent.class = "allContent";
document.body.appendChild(allContent);

const mainTitle = document.createElement("h1");
mainTitle.textContent = "Gridlock";
mainTitle.class = "text";
allContent.appendChild(mainTitle);

const gameDescription = document.createElement("h3");
gameDescription.id = "game-desc";
gameDescription.textContent = "Memory Game";
allContent.appendChild(gameDescription);

const gridStartContainer = document.createElement("div");
gridStartContainer.id = "grid";
allContent.appendChild(gridStartContainer);

for (let i = 1; i <= 9; i++) {
  const gridBlock = document.createElement("div");
  gridBlock.classList.add("grid-block");
  gridBlock.classList.add("grid-block-intro-screen");
  gridBlock.id = `block-${i}`;
  gridStartContainer.appendChild(gridBlock);
}

const gridGuessContainer = document.createElement("div");
gridGuessContainer.id = "guess-grid";
allContent.appendChild(gridGuessContainer);

for (let i = 1; i <= 9; i++) {
  const gridGuessBlock = document.createElement("div");
  gridGuessBlock.classList.add("grid-guess-block");
  gridGuessBlock.id = `guess-block-${i}`;
  gridGuessBlock.addEventListener("click", () => {
    let blockNumberClicked = gridGuessBlock.id.charAt(
      gridGuessBlock.id.length - 1
    );
    guessSequence.push(blockNumberClicked);
    guessNumber++;
    checkIfGuessWrongOrRight(guessNumber, blockNumberClicked);
  });
  gridGuessContainer.appendChild(gridGuessBlock);
}

const gridGameContainer = document.createElement("div");
gridGameContainer.id = "game-grid";
allContent.appendChild(gridGameContainer);

for (let i = 1; i <= 9; i++) {
  const gridGameBlock = document.createElement("div");
  gridGameBlock.classList.add("game-block");
  gridGameBlock.id = `game-block-${i}`;
  gridGameContainer.appendChild(gridGameBlock);
}

const purpleGrid = document.createElement("div");
purpleGrid.id = "purple-grid";
allContent.appendChild(purpleGrid);

for (let i = 1; i <= 9; i++) {
  const purpleBlock = document.createElement("div");
  purpleBlock.classList.add("purple-block");
  purpleBlock.id = `purple-block-${i}`;
  purpleGrid.appendChild(purpleBlock);
}

const greenGrid = document.createElement("div");
greenGrid.id = "green-grid";
allContent.appendChild(greenGrid);

for (let i = 1; i <= 9; i++) {
  const greenBlock = document.createElement("div");
  greenBlock.classList.add("green-block");
  greenBlock.id = `green-block-${i}`;
  greenGrid.appendChild(greenBlock);
}

const redGrid = document.createElement("div");
redGrid.id = "red-grid";
allContent.appendChild(redGrid);

for (let i = 1; i <= 9; i++) {
  const redBlock = document.createElement("div");
  redBlock.classList.add("red-block");
  redBlock.id = `red-block-${i}`;
  redGrid.appendChild(redBlock);
}

const nextLevelButton = document.createElement("button");
nextLevelButton.id = "next-level-button";
nextLevelButton.classList.add("next-level-button");
nextLevelButton.textContent = "click for next level";
allContent.appendChild(nextLevelButton);

const startButton = document.createElement("button");
startButton.id = "start-button";
startButton.classList.add("start-button");
startButton.textContent = "click to start game";
allContent.appendChild(startButton);

const flashSequenceButton = document.createElement("button");
flashSequenceButton.id = "flash-sequence-button";
flashSequenceButton.classList.add("flash-sequence-button");
flashSequenceButton.textContent = "click to flash sequence";
allContent.appendChild(flashSequenceButton);

startButton.style.display = "block";
nextLevelButton.style.display = "none";
flashSequenceButton.style.display = "none";
gameDescription.style.display = "block";
gridGuessContainer.style.display = "none";
gridStartContainer.style.display = "grid";
gridGameContainer.style.display = "none";
purpleGrid.style.display = "none";
greenGrid.style.display = "none";
redGrid.style.display = "none";

startButton.addEventListener("click", startButtonFunctionality);
flashSequenceButton.addEventListener("click", flashSequenceButtonFunctionality);
nextLevelButton.addEventListener("click", nextLevelButtonFunctionality);

function startButtonFunctionality() {
  startButton.style.display = "none";
  flashSequenceButton.style.display = "block";
  sequenceNumber = 1;
  gameDescription.textContent = `Sequence ${sequenceNumber}`;
  gameDescription.style.color = "#b055ff";
  gridStartContainer.style.display = "none";
  gridGameContainer.style.display = "grid";
  redGrid.style.display = "none";
}

function flashSequenceButtonFunctionality() {
  flashSequenceButton.style.display = "none";
  flashingSequence = [];
  guessSequence = [];
  guessNumber = 0;

  // flash blocks
  let index = 0;
  const loop = setInterval(() => {
    let block = Math.floor(Math.random() * 9) + 1;
    flashingSequence.push(block);

    if (index === sequenceNumber - 1) {
      clearInterval(loop);
      setTimeout(function () {
        purpleGrid.style.display = "grid";
        gridGameContainer.style.display = "none";
        setTimeout(function () {
          gridGuessContainer.style.display = "grid";
          purpleGrid.style.display = "none";
        }, 200);
        gameDescription.textContent = "Guess!";
      }, 1500);
    }

    currentBlock = document.getElementById(
      `game-block-${flashingSequence[index++]}`
    );

    currentBlock.style.backgroundColor = "#b055ff";

    setTimeout(function () {
      currentBlock.style.backgroundColor = "white";
    }, 200);
  }, 1500);
}

function nextLevelButtonFunctionality() {
  sequenceNumber++;
  nextLevelButton.style.display = "none";
  gameDescription.style.color = "#b055ff";
  gameDescription.textContent = `Sequence ${sequenceNumber}`;
  flashSequenceButton.style.display = "block";
  gridGuessContainer.style.display = "none";
  gridStartContainer.style.display = "none";
  gridGameContainer.style.display = "grid";
  greenGrid.style.display = "none";
}

function checkIfGuessWrongOrRight(guessNumber, blockNumberClicked) {
  if (blockNumberClicked == flashingSequence[guessNumber - 1]) {
    if (guessNumber == flashingSequence.length) {
      nextLevelButton.style.display = "block";
      gameDescription.style.color = "#4cff73";
      gameDescription.textContent = "Correct!";
      gridGuessContainer.style.display = "none";
      greenGrid.style.display = "grid";
    }
  } else {
    gridGuessContainer.style.display = "none";
    redGrid.style.display = "grid";
    gameDescription.textContent = "Game Over!";
    gameDescription.style.color = "#ff4545";
    startButton.textContent = "click to start again";
    startButton.style.display = "block";
  }
}
