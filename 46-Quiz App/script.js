const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  // currentQuiz'in indexine göre quizData içinden denk geldiği array indexteki soruyu seç.

  questionEl.innerText = currentQuizData.question;
  // Question sorusunun başladığı yer

  // currentQuiz indexine göre match olan sorunun cevaplarını seçme
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// inputun başlangıç check halini false yapan fonksiyon.
function deselectAnswers() {
  // inputtaki bütün checkedleri false a çekiyoruz ilk başta ki yanıtsız olarak gözüksün.
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// inputun checkindeki seçili cevabı alan fonk.
function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      // işaretlenen yani checked olan cevabın id sine ulaşarak hangi cevap olduğunu belirliyoruz
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    // answerdaki cevabın quizdatadaki eşleşen array indeksindeki cevabı kontrol etme durumu
    // doğruysa cevabı bildin değilse yanlış.
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      //  buton submit olduğunda 4 soruyu da cevapladıktan sonra en başa döndürüyor.
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
