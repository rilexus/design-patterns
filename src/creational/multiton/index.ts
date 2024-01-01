class Multiton {
  static _instances = {};

  static getInstance(id) {
    if (!Multiton._instances[id]) {
      Multiton._instances[id] = new Multiton();
    }

    return Multiton._instances[id];
  }
}

export default Multiton;
