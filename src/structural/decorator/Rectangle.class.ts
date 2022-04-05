import {ShapeInterface} from "./Shape.interface";

export class Rectangle implements ShapeInterface {
  draw(): void {
    console.log('draw Rectangle')
  }
}