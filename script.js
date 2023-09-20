const todoInput = document.querySelector("#input-todo");
const todoList = document.querySelector(".todo-list");
let numOfItems = document.querySelector(".numOfItems");
let themeSwitcherBtn = document.querySelector(".themeSwitcherBtn");
themeSwitcherBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeSwitcherBtn.firstElementChild.src = document.body.classList.contains(
    "light-mode"
  )
    ? "images/icon-moon.svg"
    : "images/icon-sun.svg";
  document.body.classList.toggle("body-bg-light-mode");
});

function itemCount() {
  const totalListItems = document.querySelectorAll(".todo");
  const completedItems = document.querySelectorAll(".completed");
  const remainingItems = totalListItems.length - completedItems.length;
  numOfItems.innerText = remainingItems;
}

function addCompletedStyles(inputElement) {
  let todo = inputElement.closest(".todo");
  let iconCheck = todo.querySelector('img[alt="icon-check"]');
  const isChecked = inputElement.checked;

  iconCheck.classList.toggle("checked", !isChecked);
  todo.classList.toggle("completed", !isChecked);
  itemCount();
}

function deleteTodo(e) {
  e.parentElement.remove();
  itemCount();
}

function addtodo() {
  const todoHTML = `<label class = "todo"><label class="checkbox"
  ><input type="checkbox" checked onclick="addCompletedStyles(this)"/><span
  class="custom-checkbox"
    ><img src="images/icon-check.svg" alt="icon-check" /></span
></label>${todoInput.value}<button onclick = "deleteTodo(this)"><img src="images/icon-cross.svg" alt="icon-cross";"></button></label>`;

  todoList.insertAdjacentHTML("afterbegin", todoHTML);
  itemCount();
  todoInput.value = "";
}

function showActive() {
  const totalListItems = document.querySelectorAll(".todo");
  const completedItems = document.querySelectorAll(".completed");
  let order, remainingOrder;
  order = remainingOrder = completedItems.length;

  for (let i = 0; i < totalListItems.length; i++) {
    let e = totalListItems[i];
    if (e.classList.contains("completed")) {
      gsap.to(e, {
        y: e.offsetTop - 2 * 50 * i + 50 * ++order,
        duration: 0.5,
      });
    } else {
      gsap.to(e, {
        y: e.offsetTop - 2 * 50 * i + 50 * remainingOrder--,
        duration: 0.75,
      });
    }
  }
}

function showComp() {
  const totalListItems = document.querySelectorAll(".todo");
  const completedItems = document.querySelectorAll(".completed");
  let order, remainingOrder;
  order = remainingOrder = completedItems.length;

  for (let i = 0; i < totalListItems.length; i++) {
    let e = totalListItems[i];
    if (e.classList.contains("completed")) {
      gsap.to(e, {
        y: e.offsetTop - 2 * 50 * i + 50 * --order,
        duration: 0.75,
      });
    } else {
      gsap.to(e, {
        y: e.offsetTop - 2 * 50 * i + 50 * remainingOrder++,
        duration: 0.5,
      });
    }
  }
}
function clrComp() {
  const totaltItems = document.querySelectorAll(".todo");
  totaltItems.forEach((e) => {
    if (e.classList.contains("completed")) {
      e.remove();
    }
    showComp();
  });
}
