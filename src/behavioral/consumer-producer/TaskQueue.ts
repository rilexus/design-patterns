
// This object puts async tasks (function) in a queue and executes then parallel, concurrently one after another
class TaskQueue {
	tasksQueue = [];
	consumerQueue = [];
	
	private hasTasksInQueue(){
		return this.tasksQueue.length !== 0;
	}
	
	private hasConsumerInQueue(){
		return this.consumerQueue.length !== 0;
	}
	
	constructor(concurrency: number) {
		this.tasksQueue = [];
		this.consumerQueue = [];
		
		for (let i = 0; i < concurrency; i++){
			// start concurrent tasks
			this.consumer();
		}
		
	}
	
	async consumer(){
		while (true){
			try {
				// while loop will be paused, await for next task
				const task = await this.getNextTask();
				await task();
			} catch (e){
				console.error(e);
			}
		}
	};
	
	async getNextTask(): Promise<() => Promise<void>>{
		return new Promise((resolve) => {
			if (this.hasTasksInQueue()){
				// return the next task from the queue
				return resolve(this.tasksQueue.shift())
			}
			// no task available, postpone "getNextTask" to be resolved later
			this.consumerQueue.push(resolve);
		});
	}
	
	runTask(task){
		return new Promise((resolve, reject) => {
			
			const taskWrapper = () => {
				const taskPromise = task()
				// runTask should return the value from task.
				// return what ever the task returns
				taskPromise.then(resolve, reject);
				return taskPromise;
			}
			
			// consumer is waiting in queue. pass the task to the next consumer in queue
			// execute task instantly
			if (this.hasConsumerInQueue()){
				// the resolve function from the getNextTask function
				// executing this function will unpause the consumer while loop
				const consumer = this.consumerQueue.shift();
				consumer(taskWrapper)
			} else {
				this.tasksQueue.push(taskWrapper)
			}
			
		})
	}
}

export { TaskQueue };
