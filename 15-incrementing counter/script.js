const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = 0;

  const updateCounter = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    // target = data-target number
    const zeroNumber = parseInt(counter.innerText);
    // zeroNumber , ilk baştaki innertextte yazdığımız sayı.

    const increment = target / 200;
    // increment diye oluşturduğumuz sayı ne kadar küçükse saymaya oradan başlayacak
    // console.log(increment);

    if (zeroNumber < target) {
      counter.innerText = `${Math.ceil(zeroNumber + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
