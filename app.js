document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#list");
  const inputTask = document.querySelector("#taskInput");
  const addButton = document.querySelector("#addButton");
  const listOfAddedTasks = [
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
    {task: "blabla", id:"0"},
  ];

  buildListOfTasks()

  addButton.addEventListener("click", addTaskToListOfTasks);

  function addTaskToListOfTasks() {
    if (inputTask.value.length != 0) {
      listOfAddedTasks.push({ task: inputTask.value });
      buildListOfTasks();
      inputTask.value = "";
    }
  }

  function buildListOfTasks() {
    list.innerHTML = "";
    for (let i = 0; i < listOfAddedTasks.length; i++) {
      const item = document.createElement("li");
      const task = document.createElement("span");
      const removeButton = document.createElement("button");

      task.innerText = listOfAddedTasks[i].task;
      task.id = i;
      removeButton.innerText = "X";
      removeButton.addEventListener("click", removeTaskFromList);

      item.appendChild(task);
      item.appendChild(removeButton);
      list.appendChild(item);
    }
  }

  function removeTaskFromList() {
    alert("works");
  }
});
