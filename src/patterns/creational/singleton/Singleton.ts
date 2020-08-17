
class Singleton {
  private static instance: Singleton;
  constructor() {
    if (!Singleton.instance){
      Singleton.instance = this
    }
    return Singleton.instance
  }

  static getInstance() {
    if (!Singleton.instance){
      Singleton.instance = this
    }
    return Singleton.instance
  }
}

export { Singleton }
