import {ShapeInterface, ShapeProps} from "./shape.interface";

export class Rectangle implements ShapeInterface {
  area: number;

  constructor(shapeProps: ShapeProps){
    this.area = shapeProps.area;
  }

  getArea() {
    return this.area
  }
}
