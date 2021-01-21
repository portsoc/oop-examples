import * as drawing from './drawing-functions.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const lines = [
  { x1: 200, y1: 500, x2: 400, y2: 500 },
  { x1: 400, y1: 500, x2: 400, y2: 300 },
  { x1: 200, y1: 300, x2: 200, y2: 500 },
  { x1: 170, y1: 330, x2: 300, y2: 200 },
  { x1: 430, y1: 330, x2: 300, y2: 200 },
];

const circles = [
  { x: 450, y: 20, r: 30 },
  { x: 150, y: 60, r: 50 },
  { x: 50, y: 100, r: 20 },
  { x: 250, y: 140, r: 10 },
  { x: 350, y: 180, r: 40 },
]

function draw() {
  for (const line of lines) {
    drawing.drawLine(c, line);
  }

  for (const circle of circles) {
    drawing.drawCircle(c, circle);
  }
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  moveCircles();
  draw();
  requestAnimationFrame(animate);
}

function moveCircles() {
  for (const circle of circles) {
    circle.x += 1;
    if (circle.x > canvas.width + circle.r) circle.x = -circle.r;
  }
}

animate();
