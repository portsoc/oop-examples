import * as drawing from './modules/3-drawing-objects.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

const DEG = Math.PI / 180;

const objects = [
  drawing.createLine(200, 500, 400, 500),
  drawing.createLine(400, 500, 400, 300),
  drawing.createLine(400, 300, 200, 300),
  drawing.createLine(200, 300, 200, 500),
  drawing.createLine(170, 330, 300, 200),
  drawing.createLine(430, 330, 300, 200),
  drawing.createCircle(450, 60, 50),
];

for (let i = 0; i<objects.length; i += 1) {
  objects[i].rotateBy = i * DEG / 2;
}

function draw() {
  for (const obj of objects) {
    obj.draw(c);
  }
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (const obj of objects) obj.rotate(obj.rotateBy);
  draw();
  requestAnimationFrame(animate);
}

animate();
