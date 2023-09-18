let sequenceNumber = 1;
let clickIndex;
let flashingSequence;

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

const nextLevelButton = document.createElement("button");
nextLevelButton.id = "next-level-button";
nextLevelButton.classList.add("next-level-button");
nextLevelButton.textContent = "click to go to next level";
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

startButton.addEventListener("click", startButtonFunctionality);

function startButtonFunctionality() {
  console.log("start has been clicked");
  startButton.style.display = "none";
  flashSequenceButton.style.display = "block";
  gameDescription.textContent = `Sequence ${sequenceNumber}`;
  gameDescription.style.color = "#b055ff";
  gridStartContainer.style.display = "none";
  gridGameContainer.style.display = "grid";
}

flashSequenceButton.addEventListener("click", () => {
  flashSequenceButton.style.display = "none";
  flashingSequence = [];

  // flash blocks
  let index = 0;
  const loop = setInterval(() => {
    let block = Math.floor(Math.random() * 9) + 1;
    flashingSequence.push(block);
    console.log(flashingSequence);

    if (index === sequenceNumber - 1) {
      clearInterval(loop);
      setTimeout(function () {
        console.log("sequence done.");
        purpleGrid.style.display = "grid";
        gridGameContainer.style.display = "none";
        setTimeout(function () {
          gridGuessContainer.style.display = "grid";
          purpleGrid.style.display = "none";
          nextLevelButton.style.display = "block";
        }, 200);
        gameDescription.textContent = "Guess!";
      }, 2000);
    }

    currentBlock = document.getElementById(
      `game-block-${flashingSequence[index++]}`
    );
    console.log(currentBlock);
    currentBlock.style.backgroundColor = "#b055ff";

    setTimeout(function () {
      currentBlock.style.backgroundColor = "white";
    }, 200);
  }, 2000);
});

function flashSequence(sequenceNumber) {}

// function checkSequence(flashingSequence) {
//   clickIndex = -1;

//   Array.from(gridGuessBlocks).forEach(function (block) {
//     block.addEventListener("click", () => {
//       clickIndex++;
//       guessBlock = block.id.charAt(block.id.length - 1);

//       if (guessBlock == flashingSequence[clickIndex]) {
//         if (clickIndex + 1 === flashingSequence.length) {
//           Array.from(gridBlocks).forEach(function (block) {
//             block.style.pointerEvents = "none";
//             block.style.backgroundColor = "#68ff7c";
//           });
//           gameDescriptionription.style.color = "#68ff7c";
//           gameDescriptionription.textallContent = "Correct!";
//           nextLevelButton.style.display = "block";
//         }
//       } else {
//         console.log("wrong");
//       }
//     });
//   });
// }

nextLevelButton.addEventListener("click", () => {
  sequenceNumber++;
  nextLevelButton.style.display = "none";
  gameDescription.textContent = `Sequence ${sequenceNumber}`;
  flashSequenceButton.style.display = "block";
  gridGuessContainer.style.display = "none";
  gridStartContainer.style.display = "none";
  gridGameContainer.style.display = "grid";
  // Array.from(gridBlocks).forEach(function (block) {
  //   block.style.pointerEvents = "all";
  //   block.classList.remove("grid-block-animated");
  //   block.classList.remove("grid-block-flashing");
  //   block.classList.add("grid-block-start");
  //   gameDescriptionription.style.color = "#b055ff";
  //   gameDescriptionription.textallContent = `Sequence ${sequenceNumber}`;
  //   flashSequenceButton.style.display = "block";

  //   Array.from(gridBlocks).forEach(function (block) {
  //     block.style.pointerEvents = "none";
  //     block.style.backgroundColor = "#ffffff";
  //   });
  // });
});
