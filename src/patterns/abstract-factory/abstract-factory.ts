import {ShapeFactory, ShapeFactoryInterface} from "../factory/factory";

enum ShapeFactoryType {
  shapeFactory = 'shapeFactory'
}

export abstract class AbstractFactory {
  abstract createFactory(type: ShapeFactoryType): ShapeFactoryInterface | undefined;
}

export class FactoryProducer extends AbstractFactory{
  createFactory(type: ShapeFactoryType): ShapeFactoryInterface | undefined {
    switch (type) {
      case ShapeFactoryType.shapeFactory: {
        return new ShapeFactory();
      }
      default: return undefined;
    }

  }
}
