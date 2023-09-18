const todoInput = document.querySelector("#input-todo");
const todoList = document.querySelector(".todo-list");
let numOfItems = document.querySelector(".numOfItems");
let numOfItemsComp = 0; //number of items completed

// window.onload =
function itemCount() {
  console.log(numOfItemsComp);
  numOfItems.innerText = todoList.childElementCount - numOfItemsComp - 1;
}

function addCompletedStyles(inputElement) {
  let todo = inputElement.closest(".todo");
  let iconCheck = todo.querySelector('img[alt="icon-check"]');
  if (inputElement.checked) {
    iconCheck.classList.remove("checked");
    todo.classList.remove("completed");
  } else {
    iconCheck.classList.add("checked");
    todo.classList.add("completed");
  }
}

function deleteTodo(e) {
  e.parentElement.remove();
  itemCount();
}

function addtodo() {
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
