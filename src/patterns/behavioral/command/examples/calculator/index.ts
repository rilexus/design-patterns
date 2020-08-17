import {AddCommand, Calculator, SubCommand} from "./Calculator";

const calculator = new Calculator(0)
console.log(calculator.execute(new AddCommand(2)))
console.log(calculator.execute(new SubCommand(2)))