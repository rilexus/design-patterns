export interface CommandInterface {
  execute(...args: any): any;
}

export class Command implements CommandInterface{
  _execute: (...args: any) => any = null

  constructor(workingFunction: (...args: any) => any) {
    this._execute = workingFunction
  }

  execute(...args) {
    return this._execute(...args)
  }
}