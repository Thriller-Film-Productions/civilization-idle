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