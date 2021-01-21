export class Shape {
  draw(c: CanvasRenderingContext2D) { }
  move(c: CanvasRenderingContext2D, dx?: number, dy?: number) { }

  toString() {
    return 'a shape';
  }

  log() {
    console.log(this);
  }
}

export class Line extends Shape {
  constructor(public x1: number, public y1: number, public x2: number, public y2: number) {
    super();
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.moveTo(this.x1, this.y1);
    c.lineTo(this.x2, this.y2);
    c.stroke();
  }

  toString() {
    return `line from ${this.x1},${this.y1} to ${this.x2},${this.y2}`;
  }

  get length() {
    return Math.hypot(this.x2 - this.x1, this.y2 - this.y1);
  }
}

export interface DeltaCoordinates {
  dx: number,
  dy: number,
}

export class Circle extends Shape implements DeltaCoordinates {
  dx = 0;
  dy = 0;

  constructor(public x: number, public y: number, public r: number) {
    super();
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.stroke();
  }

  move(c: CanvasRenderingContext2D, dx = this.dx, dy = this.dy) {
    this.x += dx;
    this.y += dy;

    // check bounds
    if (this.x > c.canvas.width + this.r) this.x = -this.r;
    if (this.y > c.canvas.height + this.r) this.y = -this.r;
    if (this.x < -this.r) this.x = c.canvas.width + this.r;
    if (this.y < -this.r) this.y = c.canvas.height + this.r;
  }

  // what if we remove this?
  toString() {
    return `circle at ${this.x},${this.y} with radius ${this.r}`;
  }
}
