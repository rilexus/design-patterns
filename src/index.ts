import TaskBuilder from "./creational/builder/Tasks";

function main() {
  const builder = new TaskBuilder()
    .setName("Stan")
    .setDescription("Des")
    .setDueDate("date")
    .setIsFinished(false);

  const task = builder.build();
}

main();
