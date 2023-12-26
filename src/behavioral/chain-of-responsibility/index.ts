type Person = {
  firstName?: string;
  secondName?: string;
  birthday?: string;
};

interface PersonLogger {
  setNext(next): void;
  log(person: Person): void;
}

class BasicLogger implements PersonLogger {
  next = null;
  log(person) {}
  setNext(next) {
    this.next = next;
    return this;
  }
}

class FirstNameLogger extends BasicLogger {
  log(person) {
    if (person.firstName) {
      console.log(person.firstName);
    }
    if (this.next) {
      this.next.log(person);
    }
  }
}

class SecondNameLogger extends BasicLogger {
  log(person) {
    if (person.secondName) {
      console.log(person.secondName);
    }
    if (this.next) {
      this.next.log(person);
    }
  }
}

class BirthdayLogger extends BasicLogger {
  log(person) {
    if (person.birthday) {
      console.log(person.birthday);
    }
    if (this.next) {
      this.next.log(person);
    }
  }
}

class Logger {
  next = null;

  constructor() {
    this.next = new FirstNameLogger().setNext(
      new SecondNameLogger().setNext(new BirthdayLogger())
    );
  }

  log(person: Person) {
    this.next.log(person);
  }
}

function pipeline(...args) {
  const wares = args;

  const use = middleware => {
    wares.push(middleware);
    return res;
  };

  const exec = initValue => {
    let prevIndex = -1;

    const run = (index, value) => {
      if (index === prevIndex) {
        throw new Error("next() called twice");
      }
      prevIndex = index;

      const middle = wares[index];

      const nextIndex = index + 1;

      if (middle) {
        middle(value, nextValue => {
          if (nextValue) {
            run(nextIndex, nextValue);
          } else {
            run(nextIndex, initValue);
          }
        });
      }
    };
    run(0, initValue);
  };

  const res = {
    use,
    exec
  };

  return res;
}

export { pipeline };
export default Logger;
