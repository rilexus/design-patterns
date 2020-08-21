function* generatorFunction() {
	let index = 0;
	while (true) { // https://i.giphy.com/media/9Vkm7LGgrPTcA345Sb/source.gif
		yield index++; // {value: index, done: false}
	}
}



const iterator = generatorFunction();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for (let val of iterator){
// 	console.log(val);
// }
//
// for (let val of iterator){
// 	if (val >= 10) iterator.return();
// 	console.log(val);
// }
// console.log(iterator.next())