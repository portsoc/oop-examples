function drawLine(c) {
  c.beginPath();
  c.moveTo(this.x1, this.y1);
  c.lineTo(this.x2, this.y2);
  c.stroke();
}

export function createLine(x1, y1, x2, y2) {
  const lineObj = { x1, y1, x2, y2 };
  lineObj.draw = drawLine;
  return lineObj;
}

function drawCircle(c) {
  c.beginPath();
  c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  c.stroke();
}

function moveCircle(c, dx, dy) {
  this.x += dx;
  this.y += dy;

  // check bounds
  if (this.x > c.canvas.width + this.r) this.x = -this.r;
  if (this.y > c.canvas.height + this.r) this.y = -this.r;
  if (this.x < -this.r) this.x = c.canvas.width + this.r;
  if (this.y < -this.r) this.y = c.canvas.height + this.r;
}

export function createCircle(x, y, r) {
  const circleObj = { x, y, r };
  circleObj.draw = drawCircle;
  circleObj.move = moveCircle;
  return circleObj;
}
