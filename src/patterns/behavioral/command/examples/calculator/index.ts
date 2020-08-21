import {Calculator} from "./Calculator";
import {AddCommand, SubCommand} from "./commands";

const calculator = new Calculator(0)
console.log(calculator.execute(new AddCommand(2)))
console.log(calculator.execute(new SubCommand(2)))

