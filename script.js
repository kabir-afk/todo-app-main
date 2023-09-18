const todoInput = document.querySelector("#input-todo");
const todoList = document.querySelector(".todo-list");
let numOfItems = document.querySelector(".numOfItems");

function itemCount() {
  const totalListItems = document.querySelectorAll(".todo");
  const completedItems = document.querySelectorAll(".completed");
  const remainingItems = totalListItems.length - completedItems.length;
  numOfItems.innerText = remainingItems;
}

function addCompletedStyles(inputElement) {
  let todo = inputElement.closest(".todo");
  let iconCheck = todo.querySelector('img[alt="icon-check"]');
  if (inputElement.checked) {
    iconCheck.classList.remove("checked");
    todo.classList.remove("completed");
    itemCount();
  } else {
    iconCheck.classList.add("checked");
    todo.classList.add("completed");
    itemCount();
  }
}

function deleteTodo(e) {
  e.parentElement.remove();
  itemCount();
}

function addtodo() {
  //   console.log(todoList.childNodes);
  todoList.insertAdjacentHTML(
    "afterbegin",
    `<label class = "todo"><label class="checkbox"
  ><input type="checkbox" checked onclick="addCompletedStyles(this)"/><span
  class="custom-checkbox"
    ><img src="images/icon-check.svg" alt="icon-check" /></span
></label>${todoInput.value}<button onclick = "deleteTodo(this)"><img src="images/icon-cross.svg" alt="icon-cross";"></button></label>`
  );
  itemCount();
  todoInput.value = "";
}

function clrComp() {
  const totalListItems = document.querySelectorAll(".todo");
  totalListItems.forEach((e) => {
    if (e.classList.contains("completed")) {
      e.remove();
    }
  });
}
