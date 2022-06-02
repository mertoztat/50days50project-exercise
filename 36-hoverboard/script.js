const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const kare = 500;

for (let i = 0; i < kare; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

// create color

function setColor(square) {
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  square.style.backgroundColor = randomColors;
  square.style.boxShadow = `0 0 2px ${randomColors}, 0 0 10px ${randomColors}`;
}

// remove color

function removeColor(square) {
  square.style.backgroundColor = "#1d1d1d";
  square.style.boxShadow = "0 0 2px #000";
}
