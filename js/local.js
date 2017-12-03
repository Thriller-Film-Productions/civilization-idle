function startGame() {
  localStorage.setItem('gameStarted', true);
}

function testStart() {
  if (localStorage.getItem("gameStarted")) {
    return true;
  } else {
    return false;
  }
}

function onGameStart() {
if (/*localStorage.getItem("gameData")*/false) {
    gameData = JSON.parse(localStorage.getItem("gameData"));
  } else {
    gameData = {
      moneys: {
        shekels: 0,
        gold: 0,
        yuan: 0,
        drachma: 0,
        aureus: 0,
        pound: 0,
        dollar: 0
      },
      gameSize: 12,
      settings: {scrollSpeed: 8}
    }
    saveGame();
  }
}

function saveGame() {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

setInterval(saveGame, 5000);