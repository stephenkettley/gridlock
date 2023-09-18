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
    block.classList.remove("blink");
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

  let index = 0;
  const loop = setInterval(() => {
    let block = Math.floor(Math.random() * 9) + 1;
    flashingSequence.push(block);
    if (index === sequenceNumber - 1) {
      clearInterval(loop);
    }
    currentBlock = document.getElementById(
      `block-${flashingSequence[index++]}`
    );
    currentBlock.style.backgroundColor = "#bd9aff"; // Change color

    // Set a timer to run the passed function after 1000 milliseconds (1 second)
    setTimeout(function () {
      currentBlock.style.backgroundColor = "white"; // Change the color back to the original
    }, 1000);
  }, 2000);
}
