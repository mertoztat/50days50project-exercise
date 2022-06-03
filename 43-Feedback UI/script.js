const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    //parentNode ile rating içerisindeki img ye erişiyoruz.
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
    // img ile small aynı hizada olduğundan nextElementSibling ile smalla eriştik
    console.log(selectedRating);
  }
});

sendBtn.addEventListener("click", (e) => {
  if (selectedRating === "") {
    alert("Please select a performance");
  } else {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
`;
  }

  //   console.log(panel);
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
