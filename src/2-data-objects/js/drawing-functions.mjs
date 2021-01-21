export function drawLine(c, line) {
  c.beginPath();
  c.moveTo(line.x1, line.y1);
  c.lineTo(line.x2, line.y2);
  c.stroke();
}

export function drawCircle(c, circle) {
  c.beginPath();
  c.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
  c.stroke();
}
