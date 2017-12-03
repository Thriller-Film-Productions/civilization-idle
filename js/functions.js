const initButtons = () => {
  buttons.startGame = new button(width/2-100, height/2-50, 200, 100, color(0, 150, 0), startGame);
}

const initAssets = () => {
  assets.tile = loadImage("assets/tile.png");
}