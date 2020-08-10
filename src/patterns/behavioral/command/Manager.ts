import {CommandInterface} from "./Command";

export interface CommandManagerInterface {
  execute(command: CommandInterface, ...args: any): any
}

export class Manager implements CommandInterface {
  execute(command: CommandInterface, ...args: any){
    return command.execute(...args)
  }
}