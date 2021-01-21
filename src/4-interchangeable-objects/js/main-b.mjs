import * as drawing from './drawing-objects.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const BUBBLES = 20;
const AVG_SIZE = 30;

const shapes = [
  drawing.createLine(200, 500, 400, 500),
  drawing.createLine(400, 500, 400, 300),
  drawing.createLine(200, 300, 200, 500),
  drawing.createLine(170, 330, 300, 200),
  drawing.createLine(430, 330, 300, 200),
];

for (let i = 0; i < BUBBLES; i += 1) {
  const circle = drawing.createCircle(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * AVG_SIZE + AVG_SIZE / 2,
  );
  shapes.push(circle);
}

function draw() {
  for (const shape of shapes) {
    shape.draw(c);
  }
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  move();
  draw();
  requestAnimationFrame(animate);
}

function move() {
  for (const shape of shapes) {
    if (shape.move) shape.move(c, 2, -0.5);
  }
}

animate();
