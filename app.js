document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#list");
  const inputTask = document.querySelector("#taskInput");
  const addButton = document.querySelector("#addButton");
  const listOfAddedTasks = [];

  addButton.addEventListener("click", addTaskToList);

  function createArrayList() {
    // alert('works)
    const item = document.createElement("li");
    const task = document.createElement("span");
    const removeButton = document.createElement("button");

    if (inputTask.value.length != 0) {
      task.innerText = inputTask.value;
      
      removeButton.innerText = "X";
      removeButton.addEventListener("click", removeTaskFromList);
      
      item.appendChild(task);
      item.appendChild(removeButton);
      list.appendChild(item);
      
      listOfAddedTasks.push(inputTask.value);
      //clear input
      inputTask.value = "";
      console.log(listOfAddedTasks)
    } else {
      alert("You need to write the task");
    }
  }

  function removeTaskFromList() {
    
  }
});
