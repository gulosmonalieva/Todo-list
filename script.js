const form = document.querySelector("#add-todo-form");
const input = document.querySelector("#input-todo");
const button = document.querySelector(".btn");
const list = document.querySelector("#todo-output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

button.addEventListener("click", function () {
  const myList = document.createElement("div");

  myList.classList.add("todo-item");
  list.append(myList);

  myList.innerHTML = input.value;
  input.value = " ";

  myList.addEventListener("click", function () {
    myList.remove();
  });
});
