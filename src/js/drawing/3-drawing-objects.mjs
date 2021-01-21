function drawLine(c) {
  c.beginPath();
  c.moveTo(this.x1, this.y1);
  c.lineTo(this.x2, this.y2);
  c.stroke();
}

// rotate line 1 degree around its beginning
function rotateLine(angle = 0) {
  // vector coordinates of the line
  const vx = this.x2 - this.x1;
  const vy = this.y2 - this.y1;

  // rotate the vector
  const rotx = vx * Math.cos(angle) - vy * Math.sin(angle);
  const roty = vx * Math.sin(angle) + vy * Math.cos(angle);

  // set the new end point
  this.x2 = this.x1 + rotx;
  this.y2 = this.y1 + roty;
}


export function createLine(x1, y1, x2, y2) {
  const lineObj = { x1, y1, x2, y2 };
  lineObj.draw = drawLine;
  lineObj.rotate = rotateLine;
  return lineObj;
}

function drawCircle(c) {
  c.beginPath();
  c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  c.stroke();
}

function noop() {}

export function createCircle(x, y, r) {
  const circleObj = { x, y, r };
  circleObj.draw = drawCircle;
  circleObj.rotate = noop;
  return circleObj;
}
