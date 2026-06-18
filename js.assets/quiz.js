const questions = [
{
question:"How do scientists often detect exoplanets?",
answers:[
"By touching them",
"Sound waves",
"By observing star light changes"
],
correct: 2
},
{
question:"Which planet is known as the Red Planet?",
answers:["Jupiter","Mars","Saturn"],
correct: 1
},
{
question:"What is the largest planet in our Solar System?",
answers:["Earth","Jupiter","Venus"],
correct: 1
},
{
question:"What telescope captured deep space images?",
answers:["James Webb Telescope","Newton Telescope","Galileo Telescope"],
correct: 0
},
{
question:"What is a black hole?",
answers:[
"A moon",
"A region where gravity is extremely strong",
"A comet"
],
correct: 1
}
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const qNumber = document.getElementById("qNumber");

const nextBtn = document.getElementById("NextBtn");
const prevBtn = document.getElementById("PrevBtn");
nextBtn.addEventListener("click",nextQuestion);
prevBtn.addEventListener("click",prevQuestion);

function loadQuestion() {

qNumber.textContent = currentQuestion + 1;

questionText.textContent = questions[currentQuestion].question;

answerOptions.innerHTML = "";

questions[currentQuestion].answers.forEach(answer => {
answerOptions.innerHTML += `
<li>
<label>
<input type="radio" name="answer" value="${answer}">
${answer}
</label>
</li>
`;
});

}

function nextQuestion() {

const selected = document.querySelector('input[name="answer"]:checked');

if (!selected) {
alert("Select an answer first.");
return;
}

if (currentQuestion < questions.length - 1) {
currentQuestion++;
loadQuestion();
} else {
questionText.textContent = "Quiz Complete!";
answerOptions.innerHTML = "<p>Done 🚀</p>";
document.getElementById("nextBtn").disabled = true;
document.getElementById("prevBtn").disabled = true;
}

}

function prevQuestion() {
if (currentQuestion > 0) {
currentQuestion--;
loadQuestion();
}
}

loadQuestion();