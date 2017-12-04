function initButtons() {
  buttons.startGame = new button(width / 2 - 100, height / 2 - 50, 200, 100, color(0, 150, 0), startGame);
  buttons.build = new button(width / 1.1 - 125, height / 128, 128, 128, color(0, 0, 0), () => {}, assets.build, width / 1.1, height / 128, 500);
}

function initAssets() {
  assets.tile = loadImage("assets/tile.png");
  assets.build = loadImage("assets/hammer.png");
  assets.menu = loadImage("assets/menu.png");
}

function gridLines() {
  strokeWeight(4);
  stroke(51, 50);
  for (var i = 0; i < 200 * gameData.gameHig; i += 50) {
    line(0, i, 200 * gameData.gameWid, i);
  }
  for (var i = 0; i < 200 * gameData.gameWid; i += 50) {
    line(i, 0, i, gameData.gameHig * 200);
  }
}

function showTiles() {
  for (var i = 0; i < gameData.gameWid; i++) {
    for (var j = 0; j < gameData.gameHig; j++) {
      image(assets.tile, i * 200, j * 200);
    }
  }
}