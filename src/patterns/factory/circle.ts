import {ShapeInterface} from "./shape.interface";

export class Circle implements ShapeInterface{
  area: number;

  constructor(area: number){
    this.area = area
  }

  getArea() {
    return this.area;
  }
}
