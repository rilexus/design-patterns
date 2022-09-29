interface Observer<State = any> {
  stateDidUpdate(state: State): void;
}

interface Handler<State = any> {
  (state: State): void;
}

class State/* also called "Subject" */ <State = any> {
  observer: (Observer<State> | Handler<State>)[] = [];
  state: State;

  constructor(initialState: State) {
    this.state = initialState;
  }

  notify() {
    this.observer.forEach(observer => {
      if (typeof observer === "function") {
        observer(this.state);
      } else {
        observer.stateDidUpdate(this.state);
      }
    });
  }

  subscribe(handler: Handler<State>) {
    this.observer.push(handler);
  }

  unsubscribe(handler) {
    this.observer = this.observer.filter(h => h !== handler);
  }

  addObserver(observer: Observer | ((state: State) => void)) {
    this.observer.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observer = this.observer.filter(o => o !== observer);
  }

  setState(state: State | ((oldState: State) => State)) {
    if (typeof state === "function") {
      // @ts-ignore
      this.state = state(this.state);
    } else {
      this.state = state;
    }
    this.notify();
  }

  getState(): State {
    return this.state;
  }
}

class AnyStateObserver implements Observer<number | string> {
  // implement the "stateDidUpdate" to react to state updates
  stateDidUpdate(state: number | string) {
    // will be called every time the state on the subject is set
    console.log("stateDidUpdate: ", state);
  }
}

class ObserverMain {
  numberSubject: State<number>;
  stringSubject: State<string>;

  constructor() {
    this.numberSubject = new State<number>(1);
    this.stringSubject = new State<string>("hallo");

    const subjectObserverClass = new AnyStateObserver();

    this.numberSubject.addObserver(subjectObserverClass);
    this.stringSubject.addObserver(subjectObserverClass);

    this.numberSubject.subscribe(number => {
      console.log({ number });
    });
  }

  setStateAndNotify(value: number | string) {
    if (typeof value === "string") {
      this.stringSubject.setState(value);
    } else if (typeof value === "number") {
      this.numberSubject.setState(value);
    }
  }
}

export { ObserverMain };
