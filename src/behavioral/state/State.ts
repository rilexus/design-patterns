class Step {
  steps = null;

  constructor(steps: Steps) {
    this.steps = steps;
  }

  next() {
    console.log("Implement!");
  }
}

class First extends Step {
  next() {
    // state transitions to other states
    this.steps.change(new Second(this.steps));
  }
}

class Second extends Step {
  next() {
    this.steps.change(new Third(this.steps));
  }
}

class Third extends Step {
  next() {
    // noop
  }
}

class Steps {
  currentTag = new First(this);

  change(tag) {
    // control state changes by a condition
    this.currentTag = tag;
  }
}
