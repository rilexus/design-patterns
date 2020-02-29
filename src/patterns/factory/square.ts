import {ShapeInterface, ShapeProps} from "./shape.interface";

export class Square implements ShapeInterface{
  area: number;

  constructor(shapeProps: ShapeProps) {
    this.area = shapeProps.area;
  }

  getArea(): number {
    return this.area
  }
}
