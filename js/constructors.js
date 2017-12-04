function button(x, y, width, height, colory, onClick, static, imagey, startX, startY, time) {
  this.x = x;
  this.y = y;
  this.constX = x;
  this.constY = y;
  this.width = width;
  this.height = height;
  this.color = colory;
  this.onClick = onClick;
  this.image = imagey;
  this.startX = startX;
  this.startY = startY;
  this.constartX = startX;
  this.constartY = startY;
  this.time = time;
  this.static = static;
  this.show = () => {
    if (this.startX !== undefined) {
      console.log('lerping');
      this.startX = lerp(this.startX, this.constX, 0.1);
      this.startY = lerp(this.startY, this.constY, 0.1);
      this.x = this.startX;
      this.y = this.startY;
    } else {
      this.x = this.constX;
      this.y = this.constY;
    }
    fill(this.color);
    noStroke();
    if (static) {
      if (this.image === undefined) {
        rect(this.x - transVect.x, this.y - transVect.y, this.width, this.height);
      } else {
        image(this.image, this.x - transVect.x, this.y - transVect.y);
      }
    } else {
      if (this.image === undefined) {
        rect(this.x, this.y, this.width, this.height);
      } else {
        image(this.image, this.x, this.y);
      }
    }
  }
  this.testClick = () => {
    if (static) {
      if (this.x <= mouseX && this.x + this.width >= mouseX && this.y <= mouseY && this.y + this.height >= mouseY) {
        onClick();
        return true;
      }
    } else {
      if (this.x - transVect.x <= mouseX && this.x - transVect.x + this.width >= mouseX && this.y - transVect.y <= mouseY && this.y - transVect.y + this.height >= mouseY) {
        onClick();
        return true;
      }
    }
  }
}