import Logger, { pipeline } from "./behavioral/chain-of-responsibility";
import { Circle } from "./creational/prototype";

const circle1 = new Circle({
  radius: 1,
  color: "red",
  x: 1,
  y: 1
});
const circle2 = circle1.clone();
const circle3 = circle2.clone();

console.log(circle1, circle2, circle3);
