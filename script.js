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
// function showActive() {
//   const totalListItems = document.querySelectorAll(".todo");
//   totalListItems.forEach((e) => {
//     if (e.classList.contains("completed")) {
//         e.style.display = "none";
//     }
//   });
// }
function showComp() {
  const totalListItems = document.querySelectorAll(".todo");
  const completedItems = document.querySelectorAll(".completed");
  let order = completedItems.length;
  let remainingOrder = completedItems.length;

  for (let i = 0; i < totalListItems.length; i++) {
    let e = totalListItems[i];
    if (e.classList.contains("completed")) {
      gsap.to(e, {
        y: e.offsetTop - 2 * 50 * i + 50 * --order,
        duration: 0.5,
      });
    } else if (!e.classList.contains("completed")) {
      gsap.to(e, {
        y: e.offsetTop - 2 * 50 * i + 50 * remainingOrder++,
        duration: 0.5,
      });
    }
  }
}
function clrComp() {
  const totalListItems = document.querySelectorAll(".todo");
  totalListItems.forEach((e) => {
    if (e.classList.contains("completed")) {
      gsap.to(e, {
        scale: 1.25,
        duration: 0.75,
      });
    }
  });
}
