import * as drawing from './drawing/2-drawing-functions.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

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

draw();
