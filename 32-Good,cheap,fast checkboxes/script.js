const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
    // e.target = theClickDone
    console.log(doTheTrick);
  });
});

function doTheTrick(theClickedDone) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedDone) {
      fast.checked = false;
    }
    if (cheap === theClickedDone) {
      good.checked = false;
    }
    if (fast === theClickedDone) {
      cheap.checked = false;
    }
  }
}
