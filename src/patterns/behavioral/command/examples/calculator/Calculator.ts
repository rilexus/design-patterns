import {CommandInterface} from "../../Command";

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

export class Calculator {
  value = 0

  constructor(value: number) {
    this.value = value
  }

  execute(command: CommandInterface){
    this.value = command.execute(this.value)
    return this.value
  }
}
