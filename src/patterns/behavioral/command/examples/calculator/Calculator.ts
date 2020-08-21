import {CommandInterface} from "../../Command";

export class Calculator {
  value = 0

  constructor(value: number) {
    this.value = value
  }

  execute(command: CommandInterface){
    this.value = command.execute(this.value/* calculator internal state */)
    return this.value
  }
}
