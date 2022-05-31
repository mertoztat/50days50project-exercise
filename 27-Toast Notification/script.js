const button = document.getElementById("btn");
const toast = document.getElementById("toast");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  // <div class="toast">Hello World</div>
  const newDiv = document.createElement("div");
  newDiv.classList.add("toast");
  let randomIndex = Math.floor(Math.random() * messages.length);
  newDiv.innerText = messages[randomIndex];
  toast.appendChild(newDiv);
  setTimeout(() => {
    newDiv.remove();
  }, 2000);
}
