function button(x, y, width, height, colory) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = colory;
  this.show = () => {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
  this.testClick = () => {
    if (this.x <= mouseX && this.x + this.width >= mouseX && this.y <= mouseY && this.y+this.height >= mouseY) {
      console.log(true);
    }
  }
}