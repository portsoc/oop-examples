import * as drawing from './drawing/2-drawing-functions.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const DEG = Math.PI / 180;

const lines = [
  { x1: 200, y1: 500, x2: 400, y2: 500 },
  { x1: 400, y1: 500, x2: 400, y2: 300 },
  { x1: 400, y1: 300, x2: 200, y2: 300 },
  { x1: 200, y1: 300, x2: 200, y2: 500 },
  { x1: 170, y1: 330, x2: 300, y2: 200 },
  { x1: 430, y1: 330, x2: 300, y2: 200 },
];

const circle = { x: 450, y: 60, r: 50 }

function draw() {
  for (const line of lines) {
    drawing.drawLine(c, line);
  }

  drawing.drawCircle(c, circle);
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (const line of lines) rotateLine(line, DEG);
  draw();
  requestAnimationFrame(animate);
}

// rotate line 1 degree around its beginning
function rotateLine(line, angle) {
  // vector coordinates of the line
  const vx = line.x2 - line.x1;
  const vy = line.y2 - line.y1;

  // rotate the vector
  const rotx = vx * Math.cos(angle) - vy * Math.sin(angle);
  const roty = vx * Math.sin(angle) + vy * Math.cos(angle);

  // set the new end point
  line.x2 = line.x1 + rotx;
  line.y2 = line.y1 + roty;
}

animate();
