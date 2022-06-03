const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    codes[index].value = "";
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => codes[index + 1].focus(), 150);
      // 0.1 s de codes un bir sonraki indexine focus yapıyoruz
    } else if (e.key === "Backspace") {
      codes[index - 1].focus();
    }
  });
});
