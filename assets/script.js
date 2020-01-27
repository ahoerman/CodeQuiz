let timer = $("#timer");
let timestart = 99;
let questionNum = 0;
let questions = [{
    question: "What does HTML stand for?",
    answers: ["Have Tomatoes Make Lasagna", "Hypertext Markup Language", "High Technology Mode Layout", "Hypertext Modual Layout"],
    correct: "Hypertext Markup Language",
},
{
    question: "What is an octothorp?",
    answers: ["A Marvel Villian", "A snippet of code", "Another term for the pound sign (#)", "An Octopus who's a Thor enthusiast"],
    correct: "Another term for the pound sign (#)",
},
{
    question: "Who invented HTML?",
    answers: ["Bill Gates", "Steve Wozniak", "Oprah", "Tim Berners-Lee"],
    correct: "Tim Berners-Lee",
},
{
    question: "Which of these is a self closing tag?",
    answers: ["img", "p", "h1", "div"],
    correct: "img",
},];

function quizTimer() {
    setTimeout(function () {
        if (timestart > -1) {
            timer.text(timestart);
            timestart--;
            quizTimer();
        }
    }, 1000)
};

function getQuestion() {
    let q = questions[questionNum];
    if (q) {
        $("#question").text(q.question);
        $("#a").text(q.answers[0]);
        $("#b").text(q.answers[1]);
        $("#c").text(q.answers[2]);
        $("#d").text(q.answers[3]);
    }
    else {
        $(".card").hide();
        $(".timer").hide();
        let score = $("<h1>");
        score.text("Final Score: " + timestart).attr("class", "d-flex justify-content-center mt-5");
        $(".score").append(score);
        //end game
    }
}

//grab text value for user guess
//figure out if it matches correct answer


function answerChoice(event) {
    let q = questions[questionNum];
    let penalty = 10
    let userGuess = $(event.target).text();
    if (userGuess === q.correct) {
        questionNum++;
        getQuestion();
    }
    else{
        timestart -= penalty;
        questionNum++;
        getQuestion();
    }
}



$("li.answerBtn").on("click", answerChoice);
$("#startBtn").on("click", function () {
    quizTimer();
    getQuestion();
    $(this).hide();
    $(".card").show();
    $(".timer").show();
});



