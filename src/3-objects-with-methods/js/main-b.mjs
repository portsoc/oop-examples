import * as drawing from './drawing-objects.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const shapes = [
  drawing.createLine(200, 500, 400, 500),
  drawing.createLine(400, 500, 400, 300),
  drawing.createLine(200, 300, 200, 500),
  drawing.createLine(170, 330, 300, 200),
  drawing.createLine(430, 330, 300, 200),
  drawing.createCircle(450, 20, 30),
  drawing.createCircle(150, 60, 50),
  drawing.createCircle(50, 100, 20),
  drawing.createCircle(250, 140, 10),
  drawing.createCircle(350, 180, 40),
]

function draw() {
  for (const shape of shapes) {
    shape.draw(c);
  }
}


function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  moveCircles();
  draw();
  requestAnimationFrame(animate);
}

function moveCircles() {
  for (const shape of shapes) {
    // only move the shape if it has `r` - so it's a circle
    if (shape.r != null) {
      shape.x += 1;
      if (shape.x > canvas.width + shape.r) shape.x = -shape.r;
    }
  }
}

animate();
