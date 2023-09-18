const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector("#input-todo");

function addCheckIcon(inputElement) {
  let p = inputElement.parentElement;
  let iconCheck = p.querySelector('img[alt="icon-check"]');
  if (inputElement.checked) {
    iconCheck.classList.remove("checked");
  } else {
    iconCheck.classList.add("checked");
  }
}

function addtodo() {
  todoList.insertAdjacentHTML(
    "afterbegin",
    `<div class = "todo"><label class="checkbox"
  ><input type="checkbox" checked onclick="addCheckIcon(this)"/><span
    class="custom-checkbox"
    ><img src="images/icon-check.svg" alt="icon-check" /></span
></label>${todoInput.value}</div>`
  );
  todoInput.value = "";
}
