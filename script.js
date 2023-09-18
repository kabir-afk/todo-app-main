const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector("#input-todo");

function addCheckIcon(inputElement) {
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

function addtodo() {
  todoList.insertAdjacentHTML(
    "afterbegin",
    `<div class = "todo"><label class="checkbox"
  ><input type="checkbox" checked onclick="addCheckIcon(this)"/><span
    class="custom-checkbox"
    ><img src="images/icon-check.svg" alt="icon-check" /></span
></label>${todoInput.value}<button><img src="images/icon-cross.svg" alt="icon-cross";"></button></div>`
  );
  todoInput.value = "";
}
