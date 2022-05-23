const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    // circles.length kaç tane circle olduğunu ifade ediyor yani 4. currentACtive , circledan büyükse classına active ekle.
    // eşitse birbirine sabitle 4ten fazla ilerlemesin
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    // currentACtive 1 den kücükse 1 de sabit tut 0 veya - sayılara döndürme.
    currentActive = 1;
  }
  update();
});

const update = () => {
  // update active class add & delete
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    // console.log("index", index, "circle", circle);
  });

  const actives = document.querySelectorAll(".active");
  // buton active olduğunda  mavi çizgiyi yüzdesel olarak hesaplamak için aşağıdaki formülü kullandık.
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  // %33, %66, %100 şeklinde işlemin sonucu geliyor

  // next ve prev butonlarını check etmek için.
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
