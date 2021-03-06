export class Shape {
  draw(c) { }
  move(c, dx, dy) { }
}

export class Line extends Shape {
  constructor(x1, y1, x2, y2) {
    super();
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw(c) {
    c.beginPath();
    c.moveTo(this.x1, this.y1);
    c.lineTo(this.x2, this.y2);
    c.stroke();
  }
}

export class Circle extends Shape {
  constructor(x, y, r) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.stroke();
  }

  move(c, dx, dy) {
    this.x += dx;
    this.y += dy;

    // check bounds
    if (this.x > c.canvas.width + this.r) this.x = -this.r;
    if (this.y > c.canvas.height + this.r) this.y = -this.r;
    if (this.x < -this.r) this.x = c.canvas.width + this.r;
    if (this.y < -this.r) this.y = c.canvas.height + this.r;
  }
}
