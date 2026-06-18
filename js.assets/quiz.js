const questions = [
  {
    question: "How do scientists often detect exoplanets?",
    answers: [
      "By touching them",
      "Sound waves",
      "By observing star light changes"
    ],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Jupiter", "Mars", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest planet in our Solar System?",
    answers: ["Earth", "Jupiter", "Venus"],
    correct: 1
  },
  {
    question: "What telescope captured deep space images?",
    answers: ["James Webb Telescope", "Newton Telescope", "Galileo Telescope"],
    correct: 0
  },
  {
    question: "What is a black hole?",
    answers: [
      "A moon",
      "A region where gravity is extremely strong",
      "A comet"
    ],
    correct: 1
  }
];
let currentQuestion = 0;
let score = 0;

// DOM elements
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const qNumber = document.getElementById("qNumber");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// events
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);

// load question
function loadQuestion() {
  const q = questions[currentQuestion];
  qNumber.textContent = currentQuestion + 1;
  questionText.textContent = q.question;
  answerOptions.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <label>
        <input type="radio" name="answer" value="${index}">
        ${answer}
      </label>
    `;
    answerOptions.appendChild(li);
  });
}

// get selected answer
function getSelectedAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  return selected ? parseInt(selected.value) : null;
}

// next
function nextQuestion() {
  const selected = getSelectedAnswer();

  if (selected === null) {
    alert("Select an answer first.");
    return;
  }

  if (selected === questions[currentQuestion].correct) {
    score++;
 }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
   }
}

// previous
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

// result
function showResult() {
  questionText.textContent = `Quiz complete! Score: ${score} / ${questions.length}`;
  answerOptions.innerHTML = "";

  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

loadQuestion();