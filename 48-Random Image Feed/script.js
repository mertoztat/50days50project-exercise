const container = document.querySelector(".container");
const unsplash_URL = "https://source.unsplash.com/random/";
const reload = document.getElementById("reload");
const rows = 10;

reload.addEventListener("click", () => {
  window.setTimeout(() => {
    window.location.reload(true);
  }, 80);
});

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplash_URL}${getRandomSize()}`;

  container.appendChild(img);
}

console.log(getRandomSize());

function getRandomSize() {
  return `${getRandomNumber()}*${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
