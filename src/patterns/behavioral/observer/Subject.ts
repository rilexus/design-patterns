interface Observer<State = any> {
  stateDidUpdate(state: State):void
}


class ObservableState /* also called "Subject" */<State = any> {
  observer: Observer[] = []
  state: State;

  constructor(initialState: State) {
    this.state = initialState
  }

  notify(){
    this.observer.forEach((observer) => {
      observer.stateDidUpdate(this.state)
    })
  }

  addObserver(observer: Observer){
    this.observer.push(observer)
  }

  setState(newState: State){
    this.state = newState;
    this.notify()
  }

  getState(): State{
    return this.state
  }

  removeObserver(observer: Observer){
    this.observer = this.observer.filter( o => o !== observer)
  }
}

class AnyStateObserver implements Observer<number | string> {
  // implement the "stateDidUpdate" to react to state updates
  stateDidUpdate(state:number | string){
    // will be called every time the state on the subject is set
    console.log('stateDidUpdate: ', state)
  }
}

class ObserverMain {
  numberSubject: ObservableState<number>
  stringSubject: ObservableState<string>

  constructor() {
    this.numberSubject = new ObservableState<number>(1)
    this.stringSubject = new ObservableState<string>('hallo')

    const subjectObserverClass = new AnyStateObserver()

    this.numberSubject.addObserver(subjectObserverClass)
    this.stringSubject.addObserver(subjectObserverClass)
  }

  setStateAndNotify(value: number | string){
    if (typeof value === "string"){
      this.stringSubject.setState(value)
    } else if (typeof value === "number") {
      this.numberSubject.setState(value)
    }
  }
}

export { ObserverMain }
