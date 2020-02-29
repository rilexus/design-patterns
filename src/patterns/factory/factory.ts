import {ShapeInterface, ShapeProps} from "./shape.interface";
import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Square} from "./square";

enum ShapTypes {
  rectangle = 'rectangle',
  circle = 'circle',
  square = 'square'
}

interface ShapeFactoryInterface {
  buildShape(type: ShapTypes, shapeProps: ShapeProps): ShapeInterface;
}

export class ShapeFactory implements ShapeFactoryInterface{
  buildShape(type: ShapTypes, shapeProps): ShapeInterface {
    switch (type) {
      case ShapTypes.circle: {
        return new Circle(shapeProps);
      }
      case ShapTypes.rectangle:{
        return new Rectangle(shapeProps);
      }
      default: {
        return new Square(shapeProps);
      }
    }
  }
}
