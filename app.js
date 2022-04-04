const list = document.querySelector("#list");
const inputTask = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
let listOfAddedTasks = [];

// add storage tasks to the list of array
if (listOfAddedTasks.length == 0) {
  const storageTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  listOfAddedTasks.push(...storageTasks);
}

buildListOfTasks();

addButton.addEventListener("click", addTaskToListOfTasks);

function addTaskToListOfTasks() {
  if (inputTask.value.length != 0) {
    listOfAddedTasks.push(inputTask.value);

    // add task to local storage
    localStorage.setItem('tasks', JSON.stringify(listOfAddedTasks))

    buildListOfTasks();

    // clear input
    inputTask.value = "";
  }
}

function buildListOfTasks() {
  list.innerHTML = "";
  for (let i = 0; i < listOfAddedTasks.length; i++) {
    const item = document.createElement("li");
    const task = document.createElement("span");
    const removeButton = document.createElement("button");

    item.id = "id" + i;
    task.innerText = listOfAddedTasks[i];
    removeButton.innerText = "X";
    removeButton.setAttribute("onclick", `removeTaskFromList(${i})`);

    item.appendChild(task);
    item.appendChild(removeButton);
    list.appendChild(item);
  }
}

function removeTaskFromList(id) {
  const itemToRemove = document.querySelector("#id" + id);
  list.removeChild(itemToRemove);

  // remove the task from the array
  const firstHalf = listOfAddedTasks.slice(0, id);
  const secondHalf = listOfAddedTasks.slice(id + 1);
  listOfAddedTasks = firstHalf.concat(secondHalf);

  // update list of tasks
  buildListOfTasks();

  // update local storage
  localStorage.setItem("tasks", JSON.stringify(listOfAddedTasks));
}

//localStorage.clear()
