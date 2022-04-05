import {ShapeDecorator} from "./ShapeDecorator.class";
import {ShapeInterface} from "./Shape.interface";

export class RedRectangleDecorator extends ShapeDecorator {
  constructor(shape: ShapeInterface) {
    super(shape);
  }

  setColor(shape: ShapeInterface){

  }

  draw(): void {
    this.shape.draw();
    // Do extra stuff here
    this.setColor(this.shape)
  }


}