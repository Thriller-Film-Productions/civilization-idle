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
    for (var i = 0; i < gameData.gameWid; i++) {
      for (var j = 0; j < gameData.gameHig; j++) {
        image(assets.tile, i * 200, j * 200);
      }
    }
    strokeWeight(4);
    stroke(51, 50);
    for (var i = 0; i < 200 * gameData.gameHig; i += 50) {
      line(0, i, 200 * gameData.gameWid, i);
    }
    for (var i = 0; i < 200 * gameData.gameWid; i += 50) {
      line(i, 0, i, gameData.gameHig * 200);
    }
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