class Task {
  name;
  description;
  isFinished = false;
  dueDate;

  constructor(name, description, isFinished, dueData) {
    this.name = name;
    this.description = description;
    this.isFinished = isFinished;
    this.dueDate = dueData;
  }
}

class TaskBuilder {
  name = null;
  description = null;
  isFinished = null;
  dueDate = null;

  setName(name: string): TaskBuilder {
    this.name = name;
    return this;
  }

  setDescription(description: string): TaskBuilder {
    this.description = description;
    return this;
  }

  setIsFinished(isFinished: boolean): TaskBuilder {
    this.isFinished = isFinished;
    return this;
  }

  setDueDate(dueDate: string): TaskBuilder {
    this.dueDate = dueDate;
    return this;
  }

  build() {
    if (
      !this.name ||
      !this.description ||
      !this.dueDate ||
      this.isFinished === null
    ) {
      throw new Error("Values not set");
    }
    return new Task(this.name, this.description, this.isFinished, this.dueDate);
  }
}

export default TaskBuilder;
