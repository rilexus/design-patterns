type ShapeType = {
  x: number;
  y: number;
  color: string;
};

interface ShapeInterface {
  x: number;
  y: number;
  color: string;
}

class Shape implements ShapeInterface {
  x = 0;
  y = 0;
  color = "";

  constructor();
  constructor(source: ShapeType);
  constructor(source?: ShapeType) {
    this.x = source?.x ?? 0;
    this.y = source?.y ?? 0;
    this.color = source?.color ?? "";
  }

  clone(): Shape {
    return new Shape(this);
  }
}

type RectangleType = {
  width: number;
  height: number;
} & ShapeType;

interface RectangleInterface extends ShapeInterface {
  width: number;
  height: number;
}

class Rectangle extends Shape {
  width = 0;
  height = 0;

  constructor();
  constructor(source: RectangleType);
  constructor(source?: RectangleType) {
    super(source);
    this.width = source?.width ?? 0;
    this.height = source?.height ?? 0;
  }

  clone(): Shape {
    return new Rectangle(this);
  }
}

type CircleType = {
  radius: number;
} & ShapeType;

interface CircleInterface extends ShapeInterface {
  radius: number;
}

class Circle extends Shape {
  radius = 0;

  constructor();
  constructor(source: CircleType);
  constructor(source?: CircleType) {
    super(source);
    this.radius = source?.radius ?? 0;
  }

  clone(): Circle {
    return new Circle(this);
  }
}

export { Rectangle, Circle };
