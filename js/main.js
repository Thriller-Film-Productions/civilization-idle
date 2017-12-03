function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  initButtons();
  onGameStart();
  transVect = createVector(0, 0);
}

function draw() {
  background(25);
  if (!testStart()) {
    fill(235);
    textSize(144);
    text("Civilization Idle", width / 2 - textWidth("Civilization Idle") / 2, height / 6);
    textSize(48);
    buttons.startGame.show();
    fill(235);
    text("Start", width / 2 - textWidth("Start") / 2, height / 2 + 12);
  } else {
    testScroll();
    showTiles();
    gridLines();
  }
}

function mouseClicked() {
  if (!testStart()) {
    buttons.startGame.testClick();
  }
}

function testScroll() {
  console.log(transVect);
  if (keyCode === UP_ARROW && keyIsPressed) {
    transVect.y = transVect.y + gameData.settings.scrollSpeed;
  } else if (keyCode === DOWN_ARROW && keyIsPressed) {
    transVect.y = transVect.y - gameData.settings.scrollSpeed;
  } else if (keyCode === LEFT_ARROW && keyIsPressed) {
    transVect.x = transVect.x + gameData.settings.scrollSpeed;
  } else if (keyCode === RIGHT_ARROW && keyIsPressed) {
    transVect.x = transVect.x - gameData.settings.scrollSpeed;
  }
  translate(transVect.x, transVect.y);
}

function preload() {
  initAssets();
}