const todoInput = document.querySelector("#input-todo");
const todoList = document.querySelector(".todo-list");
let numOfItems = document.querySelector(".numOfItems");
let themeSwitcherBtn = document.querySelector(".themeSwitcherBtn");
let body = document.body;
const allItems = todoList.querySelectorAll(".todo");

//Animations
let themeChange = gsap.timeline({ paused: true });

themeChange.to(themeSwitcherBtn, {
  rotate: 360,
  duration: 2,
  ease: "elastic.out(1, 0.5)",
});

let isReversed = true;

themeSwitcherBtn.addEventListener("click", () => {
  isReversed = !isReversed;

  if (isReversed) {
    themeChange.reverse();
  } else {
    themeChange.play();
  }
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
  const completedItems = document.querySelectorAll(".completed-state");
  const remainingItems = totalListItems.length - completedItems.length;
  numOfItems.innerText = remainingItems;
}

function addCompletedStyles(inputElement) {
  let todo = inputElement.closest(".todo");
  let iconCheck = todo.querySelector('img[alt="icon-check"]');
  const isChecked = inputElement.checked;

  iconCheck.classList.toggle("checked", !isChecked);
  todo.classList.toggle("completed-state", !isChecked);
  itemCount();
}

function deleteTodo(e) {
  gsap.to(e.target.parentElement.parentElement, {
    x: 466,
    ease: "sine.inOut",
    duration: 0.5,
    onComplete: () => {
      e.target.parentElement.parentElement.remove();
      itemCount();
    },
  });
}

function addtodo() {
  const todoHTML = `<li class = "todo"><label class="checkbox"
  ><input type="checkbox" checked onclick="addCompletedStyles(this)"/><span
  class="custom-checkbox"
    ><img src="images/icon-check.svg" alt="icon-check" /></span
></label>${todoInput.value}<button onclick = "deleteTodo(event)"><img src="images/icon-cross.svg" alt="icon-cross"></button></li>`;

  todoList.insertAdjacentHTML("afterbegin", todoHTML);
  itemCount();
  todoInput.value = "";
}

/*Filters */

document.querySelectorAll(".filter-sub-options button").forEach((e) => {
  e.addEventListener("click", (event) => {
    filterTodo(event.target.className);
  });
});
document.querySelectorAll(".filter-sub-options-mobile button").forEach((e) => {
  e.addEventListener("click", (event) => {
    filterTodo(event.target.className);
  });
});
function filterTodo(className) {
  const allItems = todoList.querySelectorAll(".todo");

  switch (className) {
    case "all":
      allItems.forEach((item) => {
        item.classList.remove("hidden");
        gsap.from(item, {
          duration: 1,
          y: item.offsetTop + 5,
          ease: "power3.out",
        });
      });
      break;
    case "active":
      allItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
        gsap.from(item, {
          duration: 1,
          y: item.offsetTop + 5,
          ease: "power3.out",
        });
      });
      break;
    case "completed":
      allItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
        gsap.from(item, {
          duration: 1,
          y: item.offsetTop + 5,
          ease: "power3.out",
        });
      });
      break;
  }
}

function clrComp() {
  const totaltItems = document.querySelectorAll(".todo");
  totaltItems.forEach((e) => {
    if (e.classList.contains("completed-state")) {
      gsap.to(e, {
        x: 466,
        ease: "sine.inOut",
        duration: 0.5,
        onComplete: () => {
          e.remove();
        },
      });
    }
  });
}

// code for reordering todolists , boon of Sortable JS 

Sortable.create(todoList, {
  animation: 250,
});