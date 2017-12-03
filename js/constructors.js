function button(x, y, width, height, colory, onClick) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = colory;
  this.onClick = onClick
  this.show = () => {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
  this.testClick = () => {
    if (this.x <= mouseX && this.x + this.width >= mouseX && this.y <= mouseY && this.y+this.height >= mouseY) {
      onClick();
      return true;
    }
  }
}