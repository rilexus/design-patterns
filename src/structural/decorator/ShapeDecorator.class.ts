import {ShapeInterface} from "./Shape.interface";

export abstract class ShapeDecorator implements ShapeInterface {
  constructor(protected shape: ShapeInterface) {}


  draw(): void {
    this.shape.draw()
  }

}