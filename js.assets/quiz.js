const quizData = [
    {
        question: "How do scientists often detect exoplanets?",
        answers: [
        "By touching them",
        "Sound waves",
        "By observing star light changes"
    ],
    correct : 2
    },
    {
        question: "What is the largest planet in our Solar System?",
        answers: [
        "Mars",
        "Jupiter",
        "Earth"
    ],
    correct: 1
    },
    {
      question: "Which galaxy contains Earth?",
      answers: [
        "Andromeda",
        "Milky Way",
        "Whirlpool" 
      ],
      correct:1     
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
    //using JQuery functions
    $("#questionNumber").text(currentQuestion + 1);

    $("#question").text(
        quizData[currentQuestion].question
    );

    let options = "";

 $.each(
        quizData[currentQuestion].answers,
        function(index, answer) {

            options += `
                <label>
                    <input type="radio"
                           name="answer"
                           value="${index}">
                    ${answer}
                </label>
                <br><br>
            `;
        }
    );
    $("#nextbtn").click(function(){
        let selected = $("input[name='answer']:checked").val();
        if (selected === undefined){
           alert("Please select an answer.");
           return;            
        }
        if (Number(Selected)=== quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;

        if (currentQuestion < quizData.length){
            loadQuestion();
        } else{
            $(".quiz-card").html(`
                <h2>Quiz Complete!</h2>
                <p>You scored ${score} out of ${quizData.length}</p>
                `);
        }
    }); 
    
    $(document).ready(function() {
    loadQuestion();
});  

}