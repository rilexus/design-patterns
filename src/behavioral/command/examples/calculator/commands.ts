import {CommandInterface} from "../../Command";


class Command implements CommandInterface {
  workingFunction: Function
  constructor(/* private */worker: Function) {
    this.workingFunction = worker
  }

  execute(...args){
    return this.workingFunction(...args)
  }
}

function addActionCreator(payload): CommandInterface {
  return new Command((workerArgs) => {
    return payload + workerArgs
  })
}

export class AddCommand implements CommandInterface {
  value = 0

  constructor(value) {
    this.value = value
  }

  execute(val): any {
    return this.value + val
  }
}

export class SubCommand implements CommandInterface {
  value = 0

  constructor(value) {
    this.value = value
  }

  execute(val): any {
    return val - val
  }
}