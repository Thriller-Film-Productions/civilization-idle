function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  initButtons();
  onGameStart();
}

function draw() {
  background(25);
  if (!testStart()) {
    fill(235);
    textSize(144);
    text("Civilization Idle", width/2-textWidth("Civilization Idle")/2, height/6);
    textSize(48);
    buttons.startGame.show();
    fill(235);
    text("Start", width/2-textWidth("Start")/2, height/2+12);
  } else {

  }
}

function mouseClicked() {
  if (!testStart()) {
    buttons.startGame.testClick();
  }
}

function preload() {
  initAssets();
}