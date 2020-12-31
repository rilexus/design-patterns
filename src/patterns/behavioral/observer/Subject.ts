interface Observer<State = any> {
  stateDidUpdate(state: State):void
}


class Subject<State = any> {
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

class SubjectObserverClass implements Observer<number | string> {
  stateDidUpdate(state:number | string){
    // will be called every time the state on the subject is set
    console.log('stateDidUpdate: ', state)
  }
}

class ObserverMain {
  numberSubject: Subject<number>
  stringSubject: Subject<string>
  SubjectObserverClass:SubjectObserverClass

  constructor() {
    this.numberSubject = new Subject<number>(1)
    this.stringSubject = new Subject<string>('hallo')

    this.SubjectObserverClass = new SubjectObserverClass()

    // this.SubjectObserverClass.stateDidUpdate will be registered and called on every state update (call to setState) of the Subject class.
    this.numberSubject.addObserver(this.SubjectObserverClass)
    this.stringSubject.addObserver(this.SubjectObserverClass)
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
