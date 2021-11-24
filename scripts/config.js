function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid;
  editedPlayer = selectedPlayerId;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutput.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutput.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  // if(editedPlayer === 1) {
  //   players[0].name = enteredPlayerName
  // } else {player[1].name = enteredPlayerName};
  closePlayerConfig();
}
