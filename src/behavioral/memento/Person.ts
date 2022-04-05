import {MementoInterface} from "./Memento.interface";

type PersonMoment = string

class Person implements MementoInterface<PersonMoment>{
  name: string = '';

  constructor(name: string) {
    this.name = name
  }

  hydrate(): PersonMoment {
    return JSON.stringify(this)
  }

  dehydrate(moment: PersonMoment): any {
    const m = JSON.parse(moment)
    this.name = m.name
  }
}