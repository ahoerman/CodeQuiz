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
        $(".questions").hide();
        $(".timer").hide();
        let score = $("<h1>");
        score.text(timestart).attr("class", "d-flex justify-content-center mt-5 finalScore");
        $(".score").append(score);
        $(".scoreSave").show();
    }
}

function answerChoice(event) {
    let q = questions[questionNum];
    let penalty = 10
    let userGuess = $(event.target).text();
    if (userGuess === q.correct) {
        questionNum++;
        getQuestion();
    }
    else {
        timestart -= penalty;
        questionNum++;
        getQuestion();
    }
}

function saveScore() {
    let score = $(".finalScore").text();
    let name = $(".playerName").val();
    let newScore = $("<div>");
    newScore.attr("class","d-flex justify-content-around")
    $(".highScores").append(newScore);
    newScore.append($("<p>").text(name).attr("class","scoreName"));
    newScore.append($("<p>").text(score).attr("class","scoreNum"));
    $(".playerName").hide();
    $(".saveBtn").hide();
}


$(".saveBtn").on("click", saveScore);
$("li.answerBtn").on("click", answerChoice);
$("#startBtn").on("click", function () {
    quizTimer();
    getQuestion();
    $(this).hide();
    $(".questions").show();
    $(".timer").show();
});



