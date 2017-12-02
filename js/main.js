let buttons = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
  background(0);
  for (var i = 0; i > buttons.length; i++) {
    buttons[i].show();
  }
}

function mouseClicked() {

}