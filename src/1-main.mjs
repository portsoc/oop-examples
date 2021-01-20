import * as drawing from './modules/1-drawing-functions.mjs';

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

drawing.drawLine(c, 100, 500, 300, 500);
drawing.drawLine(c, 300, 500, 300, 300);
drawing.drawLine(c, 300, 300, 100, 300);
drawing.drawLine(c, 100, 300, 100, 500);
drawing.drawLine(c, 70, 330, 200, 200);
drawing.drawLine(c, 330, 330, 200, 200);


// const lines = [
//   { x1: 200, y1: 500, x2: 400, y2: 500 },
//   { x1: 400, y1: 500, x2: 400, y2: 300 },
//   { x1: 400, y1: 300, x2: 200, y2: 300 },
//   { x1: 200, y1: 300, x2: 200, y2: 500 },
//   { x1: 170, y1: 330, x2: 300, y2: 200 },
//   { x1: 430, y1: 330, x2: 300, y2: 200 },
// ];
//
// for (const line of lines) {
//   drawing.drawLine(c, line.x1, line.y1, line.x2, line.y2);
// }
