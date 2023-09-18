const grid = document.getElementById("grid");
const startGameButton = document.getElementById("start-button");
const gridBlocks = document.getElementsByClassName("grid-block");
const nextLevelButton = document.getElementById("next-level-button");
const flashSequenceButton = document.getElementById("flash-sequence-button");
const gameDescription = document.getElementById("game-desc");
let sequenceNumber = 1;
const gridBlockNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

window.onload = () => {
  startGameButton.style.display = "block";
  nextLevelButton.style.display = "none";
  flashSequenceButton.style.display = "none";
  gameDescription.style.display = "block";
  grid.style.display = "grid";
};

startGameButton.addEventListener("click", () => {
  startGameButton.style.display = "none";
  Array.from(gridBlocks).forEach(function (block) {
    block.classList.remove("grid-block-animated");
    block.classList.remove("grid-block-flashing");
    block.classList.add("grid-block-start");
    gameDescription.style.color = "#b055ff";
    gameDescription.textContent = `Sequence ${sequenceNumber}`;
    flashSequenceButton.style.display = "block";
  });
});

nextLevelButton.addEventListener("click", () => {
  sequenceNumber++;
  nextLevelButton.style.display = "none";
  gameDescription.textContent = `Sequence ${sequenceNumber}`;
  Array.from(gridBlocks).forEach(function (block) {
    block.classList.remove("grid-block-animated");
    block.classList.remove("grid-block-flashing");
    block.classList.add("grid-block-start");
    gameDescription.style.color = "#b055ff";
    gameDescription.textContent = `Sequence ${sequenceNumber}`;
    flashSequenceButton.style.display = "block";
  });
});

flashSequenceButton.addEventListener("click", () => {
  flashSequenceButton.style.display = "none";
  Array.from(gridBlocks).forEach(function (block) {
    block.classList.remove("grid-block-start");
    block.classList.add("grid-block-flashing");
  });
  nextLevelButton.style.display = "block";
  flashSequence(sequenceNumber);
});

function flashSequence(sequenceNumber) {
  let flashingSequence = [];
  let block;
  for (let i = 1; i <= sequenceNumber; i++) {
    block = Math.floor(Math.random() * 9) + 1;
    flashingSequence.push(block);
  }
  console.log(flashingSequence);
}
