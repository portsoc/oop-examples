import * as drawing from './drawing/3-drawing-objects.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const DEG = Math.PI / 180;

const shapes = [
  drawing.createLine(200, 500, 400, 500),
  drawing.createLine(400, 500, 400, 300),
  drawing.createLine(400, 300, 200, 300),
  drawing.createLine(200, 300, 200, 500),
  drawing.createLine(170, 330, 300, 200),
  drawing.createLine(430, 330, 300, 200),
  drawing.createCircle(450, 60, 50),
];

function draw() {
  for (const shape of shapes) {
    shape.draw(c);
  }
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (const shape of shapes) shape.rotate(shape.rotateBy);
  draw();
  requestAnimationFrame(animate);
}

// give each line diffent rotation speed
for (let i = 0; i<shapes.length; i += 1) {
  shapes[i].rotateBy = i * DEG / 2;
}

animate();
