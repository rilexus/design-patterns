class TreeType {
  name;
  color;
  texture;

  constructor({ name, color, texture }) {}
}

class Tree {
  x;
  y;
  type;

  constructor({ x, y, type }) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

class TreeFactory {
  treeTypes = [];

  constructor() {}

  find({ name, color, texture }): TreeType | undefined {
    return; // find and return type
  }

  getTreeType({ name, color, texture }) {
    let type = this.find({ name, color, texture });
    if (!type) {
      type = new TreeType({ name, color, texture });
      this.treeTypes.push(type);
    }

    return type;
  }

  createTree({ x, y, color, name, texture }) {
    // data which is shared between many trees is stored only by ref. not as value in the tree
    // this decreases the amount of space needed in the RAM
    const type = this.getTreeType({ color, texture, name });
    return new Tree({ x, y, type });
  }
}

class Forest {
  trees = [];
  treeFactory;

  constructor() {
    this.treeFactory = new TreeFactory();
  }
  plantTree({ x, y, color, texture, name }) {
    this.trees.push(
      this.treeFactory.createTree({ x, y, color, name, texture })
    );
  }
}
