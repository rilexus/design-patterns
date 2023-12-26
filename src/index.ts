import Logger, { pipeline } from "./behavioral/chain-of-responsibility";

const pipe = pipeline();

pipe.use(function addOne(o, next) {
  console.log(o);
  next(o + 1);
});
pipe.use(function addTwo(o, next) {
  console.log(o);
  next();
});

pipe.exec(1);
