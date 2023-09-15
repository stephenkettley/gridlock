const startGameButton = document.getElementById("start-button");
const gridBlocks = document.getElementsByClassName("grid-block-animated");
const nextLevelButton = document.getElementById("next-level-button");
const gameplayText = document.getElementById("gameplay-text");
const gameDescription = document.getElementById("game-desc");

console.log(gridBlocks);

let timeout;

window.onload = () => {
  startGameButton.style.display = "block";
  nextLevelButton.style.display = "none";
  gameplayText.style.display = "none";
  gameDescription.style.display = "block";
};

startGameButton.addEventListener("click", () => {
  startGameButton.style.display = "none";
  Array.from(gridBlocks).forEach(function (block) {
    block.classList.remove("grid-block-animated");
    block.classList.add("grid-block-normal");
    block.classList.add("grid-block-start");
  });
  gameDescription.style.display = "none";
  gameplayText.style.display = "block";
});
