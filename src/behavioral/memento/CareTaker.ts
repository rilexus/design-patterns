export class CareTaker {
  storage: Object = {}

  add(key: string, object: Object){
    if (this.storage[key]){
      return
    }

    this.storage[key] = object
  }

  get(key: string){
    return this.storage[key]
  }
}