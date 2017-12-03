function button(x, y, width, height, colory, onClick, imagey) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = colory;
  this.onClick = onClick;
  this.image = imagey;
  this.show = () => {
    fill(this.color);
    noStroke();
    if (this.image === undefined) {
      rect(this.x, this.y, this.width, this.height);
    } else {
      image(this.image, x, y);
    }
  }
  this.testClick = () => {
    if (this.x <= mouseX && this.x + this.width >= mouseX && this.y <= mouseY && this.y+this.height >= mouseY) {
      onClick();
      return true;
    }
  }
}