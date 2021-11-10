import {TaskQueue} from "./TaskQueue";

const queue = new TaskQueue(2);


const sleep = (time) => new Promise((res) => setTimeout(res, time))


const createTask =  (num, delay) => {
	return async () => {
		console.log(`start task ${num}: ${new Date().toDateString()}`)
		await sleep(delay);
		console.log(`end task ${num}: ${new Date().toDateString()}`)
		console.log('----------------------------')
		return num
	}
}
const runConcurent = async () => {
	for (let i = 1; i <= 6; i++){
		// start multiple tasks at the same time
		// only 2 tasks will be executed at the same time
		queue.runTask( createTask(i, 1000))
	}
}

export { runConcurent }
