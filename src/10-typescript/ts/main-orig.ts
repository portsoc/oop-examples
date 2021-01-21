import * as drawing from './drawing-classes-orig';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const BUBBLES = 20;
const AVG_SIZE = 30;

const shapes = [
  new drawing.Line(200, 500, 400, 500),
  new drawing.Line(400, 500, 400, 300),
  new drawing.Line(200, 300, 200, 500),
  new drawing.Line(170, 330, 300, 200),
  new drawing.Line(430, 330, 300, 200),
];

for (let i = 0; i < BUBBLES; i += 1) {
  const circle = new drawing.Circle(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * AVG_SIZE + AVG_SIZE / 2,
  );
  circle.dx = Math.random() + 1;
  circle.dy = Math.random() - 0.5;
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
    shape.move(c, shape.dx, shape.dy);
  }
}

animate();

for (const shape of shapes) {
  if (shape instanceof drawing.Line) {
    console.log(shape.length);
  }
}
