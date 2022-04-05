class Users {
  name = ['Peter', 'Paul', 'Dimitry', 'Dimitry', 'Svetlana']

  public [Symbol.iterator](){
    let idx = -1;

    return {
      next: () => {
        idx++;

        if (idx >= this.name.length) {
          return {value: undefined, done: true};
        }

        const value = this.name[idx];

        return {
          value: value,
          done: false
        }
      }
    }
  };
}


const users = {
	user_1: {
		name: 'Peter',
	},
	user_2: {
		name: 'Paul',
	},
	user_3: {
		name: 'Dimitry',
	},
	user_4: {
		name: 'Dimitry',
	},


	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
	[Symbol.iterator /* iterator */]: function(){
		const users = this;
		const keys = Object.keys(users);
		let idx = -1;

		return {
			next: () => {
				idx++;

				if (idx >= keys.length) {
          return {value: undefined, done: true};
        }

				const key = keys[idx];
				const value = users[key];

				return {
					value: value,
					done: false
				}
			}
		}

	}
};
for (let value of ['Peter', 'Paul', 'Dimitry', 'Dimitry', 'Svetlana']){
	console.log(value)
}

// for (let value of users){
//   console.log(value)
// }
//
// for (let value of new Users()){
//   console.log(value)
// }