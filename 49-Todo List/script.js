const form = document.getElementById("form");
const todos_ul = document.getElementById("todos");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  input.value = "";
});

function addTodo() {
  let todoText = input.value;
  updateUI(todoText);
}

function updateUI(todoText) {
  let li = document.createElement("li");
  li.innerText = todoText;
  todos_ul.appendChild(li);

  // left click completed toggle event
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // right click remove event
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });
}
